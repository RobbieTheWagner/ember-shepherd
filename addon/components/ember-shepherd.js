/* globals Shepherd */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  tourService: Ember.inject.service('tour'),
  /**
   * Initializes a new tour, whenever a new set of steps is passed to the component
   */
  initialize: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      if (this.get('tourService.steps')) {
        var tour = new Shepherd.Tour({
          defaults: this.get('defaults') ? this.get('defaults') : {}
        });
        if (this.requiredElementsPresent()) {
          this.get('tourService.steps').forEach(function(step, index) {
            var shepherdStepOptions = {buttons: []};
            for (var option in step.options) {
              if (option === 'builtInButtons') {
                this.addBuiltInButtons(step, shepherdStepOptions);
              } else {
                shepherdStepOptions[option] = step.options[option];
              }
            }
            tour.addStep(step.id, shepherdStepOptions);

            var currentStep = tour.steps[index];
            currentStep.on('before-show', function() {
              if (this.get('modal')) {
                this._getElementForStep(currentStep).style.pointerEvents = 'none';
                if (currentStep.options.copyStyles) {
                  this.createHighlightOverlay(currentStep);
                } else {
                  this.popoutElement(currentStep);
                }
              }
            }.bind(this));
            currentStep.on('hide', function() {
              //Remove element copy, if it was cloned
              var currentElement = this._getElementForStep(currentStep);
              if (currentStep.options.highlightClass) {
                $(currentElement).removeClass(currentStep.options.highlightClass);
              }
              $('#highlightOverlay').remove();
            }.bind(this));
          }.bind(this));
        } else {
          var errorMessageOptions =
          {
            buttons: [
              {
                text: 'Exit',
                action: tour.cancel
              }
            ],
            classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
            copyStyles: false,
            title: this.get('errorTitle'),
            text: [this.get('messageForUser')]
          };
          tour.addStep('error', errorMessageOptions);
        }
        tour.on('start', function() {
          if (this.get('modal')) {
            $('body').append('<div id="shepherdOverlay"> </div>');
          }
          if (this.get('disableScroll')) {
            $(window).disablescroll();
          }
        }.bind(this));
        tour.on('complete', function() {
          this.cleanupModalLeftovers();
          this.set('start', false);
          if (this.get('disableScroll')) {
            $(window).disablescroll('undo');
          }
        }.bind(this));
        tour.on('cancel', function() {
          this.cleanupModalLeftovers();
          this.set('start', false);
          if (this.get('disableScroll')) {
            $(window).disablescroll('undo');
          }
        }.bind(this));
        this.set('tour', tour);
      }
    });
  }.on('didInsertElement').observes('tourService.steps', 'tourService.requiredElements'),

  /**
   * Checks the builtInButtons array for the step and adds a button with the correct action for the type
   * @param step The step to add the buttons to
   * @param shepherdStepOptions The options array to modify
   */
  addBuiltInButtons: function(step, shepherdStepOptions) {
    step.options.builtInButtons.forEach(function(button) {
      if (button.type === 'next') {
        shepherdStepOptions.buttons.push({
          classes: button.classes,
          text: button.text,
          action: function() {
            this.set('next', true);
          }.bind(this)
        });
      } else if (button.type === 'back') {
        shepherdStepOptions.buttons.push({
          classes: button.classes,
          text: button.text,
          action: function() {
            this.set('back', true);
          }.bind(this)
        });
      } else if (button.type === 'cancel') {
        shepherdStepOptions.buttons.push({
          classes: button.classes,
          text: button.text,
          action: function() {
            this.set('cancel', true);
          }.bind(this)
        });
      }
    }.bind(this));
  },

  /**
   * Function to call from the built in cancel button, to cancel the tour
   */
  cancelTour: function() {
    if (this.get('cancel')) {
      this.cleanupModalLeftovers();
      this.get('tour').cancel();
      this.set('cancel', false);
    }
  }.observes('cancel'),

  willDestroyElement: function() {
    if (this.get('tour')) {
      this.get('tour').cancel();
    }
  },

  /**
   * Removes overlays and classes associated with modal functionality
   */
  cleanupModalLeftovers: function() {
    if (this.get('modal')) {
      if (this.get('tour') &&
        this.get('tour').getCurrentStep() &&
        this.get('tour').getCurrentStep().options.attachTo &&
        this._getElementForStep(this.get('tour').getCurrentStep())) {
        this._getElementForStep(this.get('tour').getCurrentStep()).style.pointerEvents = 'auto';
      }
      $('#shepherdOverlay').remove();
      $('#highlightOverlay').remove();
      $('.shepherd-modal').removeClass('shepherd-modal');
    }
  },

  /**
   * Creates an overlay element clone of the element you want to highlight and copies all the styles.
   * @param step The step object that points to the element to highlight
   */
  createHighlightOverlay: function(step) {
    $('#highlightOverlay').remove();
    var currentElement = this._getElementForStep(step);
    var elementPosition = this._getElementPosition(currentElement);
    var highlightElement = $(currentElement).clone();
    highlightElement.attr('id', 'highlightOverlay');
    $('body').append(highlightElement);
    var computedStyle = window.getComputedStyle(currentElement).cssText;
    highlightElement[0].style.cssText = computedStyle;
    //Style all internal elements as well
    var children = $(currentElement).children();
    var clonedChildren = highlightElement.children();
    for (var i = 0; i < children.length; i++) {
      clonedChildren[i].style.cssText = window.getComputedStyle(children[i]).cssText;
    }
    //$('#highlightOverlay').html($(currentElement).html());
    highlightElement.css('position', 'absolute');
    highlightElement.css('left', elementPosition.left);
    highlightElement.css('top', elementPosition.top);
    highlightElement.css('width', elementPosition.width);
    highlightElement.css('height', elementPosition.height);
    highlightElement.css('z-index', '10002');
  },

  /**
   * Return the element for a step
   *
   * @method _getElementForStep
   * @param step step the step to get an element for
   * @returns {Element} the element for this step
   */
  _getElementForStep: function(step) {
    const attachTo = step.options.attachTo;
    const type = typeof attachTo;
    var element;
    switch (type) {
      case "string":
        element = this._getElementFromString(attachTo);
        break;
      default:
        element = this._getElementFromObject(attachTo);
        break;
    }
    return element;
  },

  /**
   * Get the element from an option string
   *
   * @method _getElementFromString
   * @param string element the string in the step configuration
   * @returns {Element} the element from the string
   */
  _getElementFromString: function(element) {
    var attachTo = element.split(' ');
    attachTo.pop();
    var selector = attachTo.join(' ');
    return $(selector)[0];
  },

  /**
   * Get the element from an option object
   *
   * @method _getElementFromObject
   * @param Object attachTo
   * @returns {Element}
   */
  _getElementFromObject: function(attachTo) {
    const op = attachTo.element;
    return $(op)[0];
  },

  /**
   * Return the element for the current step
   *
   * @method _getElementForCurrentStep
   * @returns {Element} the element for the current step
   */
  _getElementForCurrentStep: function() {
    var currentStep = this.get('tour').getCurrentStep();
    return this._getElementForStep(currentStep);
  },

  /**
   * A built-in button wrapper to move to the next step
   */
  nextStep: function() {
    if (this.get('next')) {
      //Re-enable clicking on the element
      this._getElementForCurrentStep().style.pointerEvents = 'auto';
      this.get('tour').next();
      this.set('next', false);
    }
  }.observes('next'),

  /**
   * Increases the z-index of the element, to pop it out above the overlay and highlight it
   * @param step The step object that attaches to the element
   */
  popoutElement: function(step) {
    $('.shepherd-modal').removeClass('shepherd-modal');
    var currentElement = this._getElementForStep(step);
    $(currentElement).addClass('shepherd-modal');
    if (step.options.highlightClass) {
      $(currentElement).addClass(step.options.highlightClass);
    }
  },

  /**
   * A built-in button wrapper to move to the previous step
   */
  previousStep: function() {
    if (this.get('back')) {
      //Re-enable clicking on the element
      this._getElementForCurrentStep().style.pointerEvents = 'auto';
      this.get('tour').back();
      this.set('back', false);
    }
  }.observes('back'),

  /**
   * Observes the array of requiredElements, which are the elements that must be present at the start of the tour,
   * and determines if they exist, and are visible, if either is false, it will stop the tour from executing.
   */
  requiredElementsPresent: function() {
    var allElementsPresent = true;
    if (this.get('tourService.requiredElements')) {
      this.get('tourService.requiredElements').forEach(function(element) {
        if (allElementsPresent && (!$(element.selector)[0] || !$(element.selector).is(':visible'))) {
          allElementsPresent = false;
          this.set('errorTitle', element.title);
          this.set('messageForUser', element.message);
        }
      }.bind(this));
    }
    return allElementsPresent;
  },

  /**
   * Cancel the tour, if a route change occurs
   */
  routeChange: function() {
    if (this.get('tour')) {
      this.get('tour').cancel();
      this.set('tour', null);
    }
  }.observes('currentPath'),

  /**
   * Observes start, and starts the tour whenever start becomes true
   */
  startTour: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      if (this.get('start') && this.get('tour')) {
        this.get('tour').start();
      }
    });
  }.observes('start'),

  /**
   * Taken from introjs https://github.com/usablica/intro.js/blob/master/intro.js#L1092-1124
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   *
   * @api private
   * @method _getOffset
   * @param {Object} element
   * @returns {*} Element's position info
   */
  _getElementPosition: function(element) {
    var elementPosition = {};

    //set width
    elementPosition.width = element.offsetWidth;

    //set height
    elementPosition.height = element.offsetHeight;

    //calculate element top and left
    var _x = 0;
    var _y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      _x += element.offsetLeft;
      _y += element.offsetTop;
      element = element.offsetParent;
    }
    //set top
    elementPosition.top = _y;
    //set left
    elementPosition.left = _x;

    return elementPosition;
  }
});
