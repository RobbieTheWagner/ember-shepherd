/* globals Shepherd */
import Ember from 'ember';
import $ from 'jquery';

export default Ember.Component.extend({
  /**
   * Initializes a new tour, whenever a new set of steps is passed to the component
   */
  initialize: function() {
    Ember.run.scheduleOnce('afterRender', this, function() {
      if (this.get('steps')) {
        var tour = new Shepherd.Tour({
          defaults: this.get('defaults') ? this.get('defaults') : {}
        });

        this.get('steps').forEach(function(step, index) {
          var shepherdStepOptions = {buttons: []};
          for (var option in step.options) {
            if (option === 'builtInButtons') {
              this.addBuiltInButtons(step, shepherdStepOptions);
            } else if (option === 'customButtons') {
            } else {
              shepherdStepOptions[option] = step.options[option];
            }
          }
          tour.addStep(step.id, shepherdStepOptions);

          var currentStep = tour.steps[index];
          currentStep.on('show', function() {
            if (this.get('modal')) {
              $(currentStep.options.attachTo.split(' ')[0])[0].style.pointerEvents = 'none';
              if (currentStep.options.copyStyles) {
                this.createHighlightOverlay(currentStep);
              }
              else {
                this.popoutElement(currentStep);
              }
            }
          }.bind(this));
          currentStep.on('hide', function() {
            //Remove element copy, if it was cloned
            $('#highlightOverlay').remove();
          });
        }.bind(this));
        tour.on('start', function() {
          if (this.get('modal')) {
            $('body').append('<div id="shepherdOverlay"> </div>');
          }
        }.bind(this));
        tour.on('complete', function() {
          this.cleanupModalLeftovers();
          this.set('start', false);
        }.bind(this));
        tour.on('cancel', function() {
          this.cleanupModalLeftovers();
          this.set('start', false);
        }.bind(this));
        this.set('tour', tour);
      }
    });
  }.on('didInsertElement').observes('steps'),
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
  /**
   * Removes overlays and classes associated with modal functionality
   */
  cleanupModalLeftovers: function() {
    if (this.get('modal')) {
      if (this.get('tour') && $(this.get('tour').getCurrentStep().options.attachTo.split(' ')[0])[0]) {
        $(this.get('tour').getCurrentStep().options.attachTo.split(' ')[0])[0].style.pointerEvents = 'auto';
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
    var currentElement = $(step.options.attachTo.split(' ')[0])[0];
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
   * A built-in button wrapper to move to the next step
   */
  nextStep: function() {
    if (this.get('next')) {
      //Re-enable clicking on the element
      $(this.get('tour').getCurrentStep().options.attachTo.split(' ')[0])[0].style.pointerEvents = 'auto';
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
    var currentElement = $(step.options.attachTo.split(' ')[0])[0];
    $(currentElement).addClass('shepherd-modal');
  },
  /**
   * A built-in button wrapper to move to the previous step
   */
  previousStep: function() {
    if (this.get('back')) {
      //Re-enable clicking on the element
      $(this.get('tour').getCurrentStep().options.attachTo.split(' ')[0])[0].style.pointerEvents = 'auto';
      this.get('tour').back();
      this.set('back', false);
    }
  }.observes('back'),
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
      if (this.get('start')) {
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
