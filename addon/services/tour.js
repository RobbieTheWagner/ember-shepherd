import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {

  // Get current path
  _applicationController: null,
  currentPath: Ember.computed.oneWay('_applicationController.currentPath'),

  // Configuration Options
  defaults: {},
  disableScroll: false,
  modal: false,
  requiredElements: Ember.A([]),
  steps: Ember.A([]),

  // Handle errors
  errorTitle: null,
  messageForUser: null,

  // Is the tour currently running?
  isActive: false,

  // Create a tour object based on the current configuration
  _tourObject: function() {
    const steps = this.get('steps');

    // Return nothing if there are no steps
    if (Ember.isEmpty(steps)) {
      return;
    }

    // Create a new tour object with the new defaults
    var tour = new Shepherd.Tour({
      defaults: this.get('defaults')
    });

    // Check for the required elements and set up the steps on the tour
    if (this._requiredElementsPresent()) {
      steps.forEach((step, index) => {
        var shepherdStepOptions = {buttons: []};
        for (var option in step.options) {
          if (option === 'builtInButtons') {
            this._addBuiltInButtons(step, shepherdStepOptions);
          } else if (option === 'attachTo') {
            shepherdStepOptions[option] = this._exchangeForAttachmentConfig(step.options[option]);
          } else {
            shepherdStepOptions[option] = step.options[option];
          }
        }
        tour.addStep(step.id, shepherdStepOptions);

        // Step up events for the current step
        var currentStep = tour.steps[index];
        currentStep.on('before-show', () => {
          if (this.get('modal')) {
            this._getElementForStep(currentStep).style.pointerEvents = 'none';
            if (currentStep.options.copyStyles) {
              this._createHighlightOverlay(currentStep);
            } else {
              this._popoutElement(currentStep);
            }
          }
        });
        currentStep.on('hide', () => {
          //Remove element copy, if it was cloned
          var currentElement = this._getElementForStep(currentStep);
          if (currentStep.options.highlightClass) {
            Ember.$(currentElement).removeClass(currentStep.options.highlightClass);
          }
          Ember.$('#highlightOverlay').remove();
        });
      });
    } else {
      tour.addStep('error', {
        buttons: [{
          text: 'Exit',
          action: tour.cancel
        }],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        copyStyles: false,
        title: this.get('errorTitle'),
        text: [this.get('messageForUser')]
      });
    }

    // Set up tour event bindings
    tour.on('start', () => {
      if (this.get('modal')) {
        Ember.$('body').append('<div id="shepherdOverlay"> </div>');
      }
      if (this.get('disableScroll')) {
        Ember.$(window).disablescroll();
      }
    });
    tour.on('complete', () => {
      this._cleanupModalLeftovers();
      if (this.get('disableScroll')) {
        Ember.$(window).disablescroll('undo');
      }
      this.trigger('complete');
    });
    tour.on('cancel', () => {
      this._cleanupModalLeftovers();
      if (this.get('disableScroll')) {
        Ember.$(window).disablescroll('undo');
      }
    });

    // Return the created tour object
    return tour;
  }.property('steps', 'default', 'requiredElements'),

  init: function() {
    // Set up event bindings
    this.on('start', () => {
      // What else has to be run on start?
      Ember.run.scheduleOnce('afterRender', this, function() {
        if (Ember.isPresent(this.get('_tourObject'))) {
          this.get('_tourObject').start();
        }
        this.set('isActive', true);
      });
    });
    this.on('complete', () => {
      // What else has to be run on completion?
      this.set('isActive', false);
    });
    this.on('cancel', () => {
      this._cleanupModalLeftovers();
      this.get('_tourObject').cancel();
      this.set('isActive', false);
    });
    this.on('next', () => {
      //Re-enable clicking on the element
      this._getElementForCurrentStep().style.pointerEvents = 'auto';
      this.get('_tourObject').next();
    });
    this.on('back', () => {
      //Re-enable clicking on the element
      this._getElementForCurrentStep().style.pointerEvents = 'auto';
      this.get('_tourObject').back();
    });
  },

  _cleanupModalLeftovers: function() {
    if (this.get('modal')) {
      if (this.get('tour') &&
        this.get('tour').getCurrentStep() &&
        this.get('tour').getCurrentStep().options.attachTo &&
        this._getElementForStep(this.get('tour').getCurrentStep())) {
        this._getElementForStep(this.get('tour').getCurrentStep()).style.pointerEvents = 'auto';
      }
      Ember.run('afterRender', function() {
        Ember.$('#shepherdOverlay').remove();
        Ember.$('#highlightOverlay').remove();
        Ember.$('.shepherd-modal').removeClass('shepherd-modal');
      });
    }
  },

  /**
   * Observes the array of requiredElements, which are the elements that must be present at the start of the tour,
   * and determines if they exist, and are visible, if either is false, it will stop the tour from executing.
   */
  _requiredElementsPresent: function() {
    var allElementsPresent = true;
    const requiredElements = this.get('requiredElements');
    if (Ember.isPresent(requiredElements)) {
      requiredElements.forEach((element) => {
        if (allElementsPresent && (!Ember.$(element.selector)[0] || !Ember.$(element.selector).is(':visible'))) {
          allElementsPresent = false;
          this.set('errorTitle', element.title);
          this.set('messageForUser', element.message);
        }
      });
    }
    return allElementsPresent;
  },

  /**
   * Checks the builtInButtons array for the step and adds a button with the correct action for the type
   * @param step The step to add the buttons to
   * @param shepherdStepOptions The options array to modify
   */
  _addBuiltInButtons: function(step, shepherdStepOptions) {
    step.options.builtInButtons.forEach((button) => {
      if (button.type === 'next') {
        shepherdStepOptions.buttons.push({
          classes: button.classes,
          text: button.text,
          action: () => {
            this.trigger('next');
          }
        });
      } else if (button.type === 'back') {
        shepherdStepOptions.buttons.push({
          classes: button.classes,
          text: button.text,
          action: () => {
            this.trigger('back');
          }
        });
      } else if (button.type === 'cancel') {
        shepherdStepOptions.buttons.push({
          classes: button.classes,
          text: button.text,
          action: () => {
            this.trigger('cancel');
          }
        });
      }
    });
  },

  /**
   * Creates an overlay element clone of the element you want to highlight and copies all the styles.
   * @param step The step object that points to the element to highlight
   */
  _createHighlightOverlay: function(step) {
    Ember.$('#highlightOverlay').remove();
    var currentElement = this._getElementForStep(step);
    var elementPosition = this._getElementPosition(currentElement);
    var highlightElement = Ember.$(currentElement).clone();
    highlightElement.attr('id', 'highlightOverlay');
    Ember.$('body').append(highlightElement);
    var computedStyle = window.getComputedStyle(currentElement).cssText;
    highlightElement[0].style.cssText = computedStyle;
    //Style all internal elements as well
    var children = Ember.$(currentElement).children();
    var clonedChildren = highlightElement.children();
    for (var i = 0; i < children.length; i++) {
      clonedChildren[i].style.cssText = window.getComputedStyle(children[i]).cssText;
    }
    highlightElement.css('position', 'absolute');
    highlightElement.css('left', elementPosition.left);
    highlightElement.css('top', elementPosition.top);
    highlightElement.css('width', elementPosition.width);
    highlightElement.css('height', elementPosition.height);
    highlightElement.css('z-index', '10002');
  },

  /**
   * Exchanges the given attachment configuration for the object equivalent with
   * the DOM element passed in directly.
   *
   * Allows for use of pseudoselectors, because it uses jQuery's selector engine
   * instead of the built-in one
   *
   * @param {Object} attachTo The given "attachTo" configuration
   * @return {Object} The optimized configuration
   */
  _exchangeForAttachmentConfig: function(attachTo) {
    const type = typeof attachTo;
    var config = {
      element: null,
      on: null
    };
    switch(type) {
      case "string": {
        config.element = this._getElementFromString(attachTo);
        const configArray = attachTo.split(' ');
        config.on = configArray[configArray.length - 1];
        break;
      }
      case "object": {
        config.element = this._getElementFromObject(attachTo);
        config.on = attachTo.on;
        break;
      }
      default:
        config = null;
    }
    return config;
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
    return Ember.$(selector).get(0);
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
    return Ember.$(op).get(0);
  },

  /**
   * Return the element for the current step
   *
   * @method _getElementForCurrentStep
   * @returns {Element} the element for the current step
   */
  _getElementForCurrentStep: function() {
    var currentStep = this.get('_tourObject').getCurrentStep();
    return this._getElementForStep(currentStep);
  },

  /**
   * Increases the z-index of the element, to pop it out above the overlay and highlight it
   * @param step The step object that attaches to the element
   */
  _popoutElement: function(step) {
    Ember.$('.shepherd-modal').removeClass('shepherd-modal');
    var currentElement = this._getElementForStep(step);
    Ember.$(currentElement).addClass('shepherd-modal');
    if (step.options.highlightClass) {
      Ember.$(currentElement).addClass(step.options.highlightClass);
    }
  },

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
