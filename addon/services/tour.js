import Ember from 'ember';

const { Evented, Service, computed, isPresent, on, run } = Ember;
const { scheduleOnce } = run;
const { oneWay } = computed;

export default Service.extend(Evented, {
  applicationController: null,
  // Get current path
  currentPath: oneWay('applicationController.currentPath'),

  // Configuration Options
  defaults: {},

  disableScroll: false,

  errorTitle: null,

  // Is the tour currently running?
  isActive: false,

  messageForUser: null,

  modal: false,

  requiredElements: Ember.A([]),

  steps: Ember.A([]),


  initialize: on('init', function() {
    // Set up event bindings
    this.on('start', () => {
      // What else has to be run on start?
      scheduleOnce('afterRender', this, function() {
        if (isPresent(this.get('tourObject'))) {
          this.get('tourObject').start();
        }
        this.set('isActive', true);
      });
    });
    this.on('complete', () => {
      // What else has to be run on completion?
      this.set('isActive', false);
    });
    this.on('cancel', () => {
      this.cleanupModalLeftovers();
      this.get('tourObject').cancel();
      this.set('isActive', false);
    });
    this.on('next', () => {
      //Re-enable clicking on the element
      this.getElementForCurrentStep().style.pointerEvents = 'auto';
      this.get('tourObject').next();
    });
    this.on('back', () => {
      //Re-enable clicking on the element
      this.getElementForCurrentStep().style.pointerEvents = 'auto';
      this.get('tourObject').back();
    });
  }),

  /**
   * Checks the builtInButtons array for the step and adds a button with the correct action for the type
   * @param step The step to add the buttons to
   * @param shepherdStepOptions The options array to modify
   * @private
   */
  addBuiltInButtons(step, shepherdStepOptions) {
    step.options.builtInButtons.forEach((button) => {
      let action;
      if (['back', 'next', 'cancel'].indexOf(button.type) > -1) {
        action = () => this.trigger(button.type);
      } else {
        action = button.action || Ember.K;
      }

      shepherdStepOptions.buttons.push({
        classes: button.classes,
        text: button.text,
        action
      });
    });
  },

  /**
   * Cleanup the modal leftovers, like the overlay and highlight, so they don't hang around.
   * @private
   */
  cleanupModalLeftovers() {
    if (this.get('modal')) {
      if (this.get('tour') &&
        this.get('tour').getCurrentStep() &&
        this.get('tour').getCurrentStep().options.attachTo &&
        this.getElementForStep(this.get('tour').getCurrentStep())) {
        this.getElementForStep(this.get('tour').getCurrentStep()).style.pointerEvents = 'auto';
      }
      Ember.run('afterRender', function() {
        Ember.$('#shepherdOverlay').remove();
        Ember.$('#highlightOverlay').remove();
        Ember.$('.shepherd-modal').removeClass('shepherd-modal');
      });
    }
  },

  /**
   * Creates an overlay element clone of the element you want to highlight and copies all the styles.
   * @param step The step object that points to the element to highlight
   */
  createHighlightOverlay(step) {
    Ember.$('#highlightOverlay').remove();
    const currentElement = this.getElementForStep(step);
    if(currentElement) {
      const elementPosition = this.getElementPosition(currentElement);
      const highlightElement = Ember.$(currentElement).clone();
      highlightElement.attr('id', 'highlightOverlay');
      Ember.$('body').append(highlightElement);
      const computedStyle = window.getComputedStyle(currentElement).cssText;
      highlightElement[0].style.cssText = computedStyle;
      //Style all internal elements as well
      const children = Ember.$(currentElement).children();
      const clonedChildren = highlightElement.children();
      for (let i = 0; i < children.length; i++) {
        clonedChildren[i].style.cssText = window.getComputedStyle(children[i]).cssText;
      }
      highlightElement.css('position', 'absolute');
      highlightElement.css('left', elementPosition.left);
      highlightElement.css('top', elementPosition.top);
      highlightElement.css('width', elementPosition.width);
      highlightElement.css('height', elementPosition.height);
      highlightElement.css('z-index', '10002');
    }
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
   * @private
   */
  exchangeForAttachmentConfig(attachTo) {
    const type = typeof attachTo;
    let config = {
      element: null,
      on: null
    };
    if (type === 'string') {
      config.element = this.getElementFromString(attachTo);
      const configArray = attachTo.split(' ');
      config.on = configArray[configArray.length - 1];
    }
    else if (attachTo !== null && attachTo !== undefined && type === 'object') {
      config.element = this.getElementFromObject(attachTo);
      config.on = attachTo.on;
    }
    else {
      config = null;
    }

    return config;
  },

  /**
   * Return the element for the current step
   *
   * @method getElementForCurrentStep
   * @returns {Element} the element for the current step
   */
  getElementForCurrentStep() {
    let currentStep = this.get('tourObject').getCurrentStep();
    return this.getElementForStep(currentStep);
  },

  /**
   * Return the element for a step
   *
   * @method getElementForStep
   * @param step step the step to get an element for
   * @returns {Element} the element for this step
   * @private
   */
  getElementForStep(step) {
    const attachTo = step.options.attachTo;
    const type = typeof attachTo;
    let element;
    if (type === 'string') {
      element = this.getElementFromString(attachTo);
    }
    else if (attachTo !== null && attachTo !== undefined && type === 'object') {
      element = this.getElementFromObject(attachTo);
    }
    else {
      element = null;
    }
    return element;
  },

  /**
   * Get the element from an option object
   *
   * @method getElementFromObject
   * @param Object attachTo
   * @returns {Element}
   * @private
   */
  getElementFromObject(attachTo) {
    const op = attachTo.element;
    return Ember.$(op).get(0);
  },

  /**
   * Get the element from an option string
   *
   * @method getElementFromString
   * @param string element the string in the step configuration
   * @returns {Element} the element from the string
   * @private
   */
  getElementFromString(element) {
    const attachTo = element.split(' ');
    attachTo.pop();
    const selector = attachTo.join(' ');
    return Ember.$(selector).get(0);
  },

  /**
   * Increases the z-index of the element, to pop it out above the overlay and highlight it
   * @param step The step object that attaches to the element
   * @private
   */
  popoutElement(step) {
    Ember.$('.shepherd-modal').removeClass('shepherd-modal');
    const currentElement = this.getElementForStep(step);
    if(currentElement) {
      Ember.$(currentElement).addClass('shepherd-modal');
      if (step.options.highlightClass) {
        Ember.$(currentElement).addClass(step.options.highlightClass);
      }
    }
  },

  /**
   * Create a tour object based on the current configuration
   */
  tourObject: computed('steps', 'default', 'requiredElements', function() {
    const steps = this.get('steps');

    // Return nothing if there are no steps
    if (Ember.isEmpty(steps)) {
      return;
    }

    // Create a new tour object with the new defaults
    let tour = new Shepherd.Tour({
      defaults: this.get('defaults')
    });

    // Check for the required elements and set up the steps on the tour
    if (this.requiredElementsPresent()) {
      steps.forEach((step, index) => {
        let shepherdStepOptions = {buttons: []};
        for (let option in step.options) {
          if (option === 'builtInButtons') {
            this.addBuiltInButtons(step, shepherdStepOptions);
          }
          else if (option === 'attachTo') {
            shepherdStepOptions[option] = this.exchangeForAttachmentConfig(step.options[option]);
          }
          else {
            shepherdStepOptions[option] = step.options[option];
          }
        }
        tour.addStep(step.id, shepherdStepOptions);

        // Step up events for the current step
        let currentStep = tour.steps[index];
        currentStep.on('before-show', () => {
          if (this.get('modal')) {
            const currentElement = this.getElementForStep(currentStep);
            if(currentElement) {
              currentElement.style.pointerEvents = 'none';
              if (currentStep.options.copyStyles) {
                this.createHighlightOverlay(currentStep);
              } else {
                this.popoutElement(currentStep);
              }
            }
          }
        });
        currentStep.on('hide', () => {
          //Remove element copy, if it was cloned
          const currentElement = this.getElementForStep(currentStep);
          if(currentElement) {
            if (currentStep.options.highlightClass) {
              Ember.$(currentElement).removeClass(currentStep.options.highlightClass);
            }
            Ember.$('#highlightOverlay').remove();
          }
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
      this.cleanupModalLeftovers();
      if (this.get('disableScroll')) {
        Ember.$(window).disablescroll('undo');
      }
      this.trigger('complete');
    });
    tour.on('cancel', () => {
      this.cleanupModalLeftovers();
      if (this.get('disableScroll')) {
        Ember.$(window).disablescroll('undo');
      }
    });

    // Return the created tour object
    return tour;
  }),

  /**
   * Observes the array of requiredElements, which are the elements that must be present at the start of the tour,
   * and determines if they exist, and are visible, if either is false, it will stop the tour from executing.
   * @private
   */
  requiredElementsPresent() {
    let allElementsPresent = true;
    const requiredElements = this.get('requiredElements');
    if (isPresent(requiredElements)) {
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
   * Taken from introjs https://github.com/usablica/intro.js/blob/master/intro.js#L1092-1124
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   *
   * @api private
   * @method getOffset
   * @param {Object} element
   * @returns {*} Element's position info
   * @private
   */
  getElementPosition(element) {
    let elementPosition = {};

    //set width
    elementPosition.width = element.offsetWidth;

    //set height
    elementPosition.height = element.offsetHeight;

    //calculate element top and left
    let x = 0;
    let y = 0;
    while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
      x += element.offsetLeft;
      y += element.offsetTop;
      element = element.offsetParent;
    }
    //set top
    elementPosition.top = y;
    //set left
    elementPosition.left = x;

    return elementPosition;
  }

});
