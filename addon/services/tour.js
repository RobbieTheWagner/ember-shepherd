import Ember from 'ember';

const { Evented, Service, isPresent, run, $, isEmpty, observer } = Ember;
/**
 * Taken from introjs https://github.com/usablica/intro.js/blob/master/intro.js#L1092-1124
 * Get an element position on the page
 * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
 */
function getElementPosition(element) {
  let elementPosition = {};
  elementPosition.width = element.offsetWidth;
  elementPosition.height = element.offsetHeight;

  //calculate element top and left
  let x = 0;
  let y = 0;
  while (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  }

  elementPosition.top = y;
  elementPosition.left = x;
  return elementPosition;
}


export default Service.extend(Evented, {
  // Configuration Options
  defaults: {},

  disableScroll: false,

  errorTitle: null,

  isActive: false,

  messageForUser: null,

  modal: false,

  requiredElements: Ember.A(),

  steps: Ember.A(),

  start() {
    this.set('isActive', true);
    this.get('tourObject').start();
  },

  cancel() {
    this.get('tourObject').cancel();
  },

  _onTourNext() {
    this.trigger('next');
  },

  _onTourBack() {
    this.trigger('back');
  },

  next() {
    this.get('tourObject').next();
    this._onTourNext();
  },

  back() {
    this.get('tourObject').back();
    this._onTourBack();
  },

  onTourStart() {
    if (this.get('modal')) {
      $('body').append('<div id="shepherdOverlay"></div>');
    }
    if (this.get('disableScroll')) {
      $(window).disablescroll();
    }
    this.trigger('start');
  },

  onTourComplete() {
    this.set('isActive', false);
    this.cleanup();
    this.trigger('complete');
  },

  onTourCancel() {
    this.set('isActive', false);
    this.cleanup();
    this.trigger('cancel');
  },

  init() {
    this._super(...arguments);

    let defaults = this.get('defaults');
    let tourObject = new Shepherd.Tour({ defaults });

    tourObject.on('start', run.bind(this, 'onTourStart'));
    tourObject.on('complete', run.bind(this, 'onTourComplete'));
    tourObject.on('cancel', run.bind(this, 'onTourCancel'));
    this.set('tourObject', tourObject);
  },

  makeButton({ type, classes, text, action }) {
    if (type === 'cancel') {
      action = run.bind(this, function() {
        this.get('tourObject').cancel();
      });
    } else if (type === 'back') {
      action = run.bind(this, function() {
        this._onTourBack();
        this.get('tourObject').back();
      });
    } else if (type === 'next') {
      action = run.bind(this, function() {
        this._onTourNext();
        this.get('tourObject').next();
      });
    } else {
      action = action || Ember.K;
    }
    return { action, classes, text };
  },

  /**
   * Cleanup the modal leftovers, like the overlay and highlight, so they don't hang around.
   * @private
   */
  cleanup() {
    if (this.get('disableScroll')) {
      $(window).disablescroll('undo');
    }
    if (this.get('modal')) {
      let tour = this.get('tourObject');
      if (tour) {
        let currentStep = tour.getCurrentStep();
        let stepElement = this.getElementForStep(currentStep);
        if (currentStep && currentStep.options.attachTo && stepElement) {
          stepElement.style.pointerEvents = 'auto';
        }
      }
      run('afterRender', function() {
        $('#shepherdOverlay').remove();
        $('#highlightOverlay').remove();
        $('.shepherd-modal').removeClass('shepherd-modal');
      });
    }
  },

  /**
   * Creates an overlay element clone of the element you want to highlight and copies all the styles.
   * @param step The step object that points to the element to highlight
   */
  createHighlightOverlay(step) {
    $('#highlightOverlay').remove();
    const currentElement = this.getElementForStep(step);
    if (currentElement) {
      const elementPosition = getElementPosition(currentElement);
      const highlightElement = $(currentElement).clone();
      highlightElement.attr('id', 'highlightOverlay');
      $('body').append(highlightElement);
      const computedStyle = window.getComputedStyle(currentElement).cssText;
      highlightElement[0].style.cssText = computedStyle;
      //Style all internal elements as well
      const children = $(currentElement).children();
      const clonedChildren = highlightElement.children();

      for (let i = 0; i < children.length; i++) {
        clonedChildren[i].style.cssText =
          window.getComputedStyle(children[i]).cssText;
      }

      highlightElement.css({
        'position': 'absolute',
        'left': elementPosition.left,
        'top': elementPosition.top,
        'width': elementPosition.width,
        'height': elementPosition.height,
        'z-index': 10002
      });
    }
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
    return $(op).get(0);
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
    return $(selector).get(0);
  },

  /**
   * Increases the z-index of the element, to pop it out above the overlay and highlight it
   * @param step The step object that attaches to the element
   * @private
   */
  popoutElement(step) {
    $('.shepherd-modal').removeClass('shepherd-modal');
    const currentElement = this.getElementForStep(step);
    if (currentElement) {
      $(currentElement).addClass('shepherd-modal');
      if (step.options.highlightClass) {
        $(currentElement).addClass(step.options.highlightClass);
      }
    }
  },

  /**
   * Create a tour object based on the current configuration
   */
  stepsChange: observer('steps', function() {
    const steps = this.get('steps');
    const tour = this.get('tourObject');
    // Return nothing if there are no steps
    if (isEmpty(steps)) { return; }
    if (!this.requiredElementsPresent()) {
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
      return;
    }

    steps.forEach((step, index) => {
      let { id, options } = step;
      options.buttons = options.builtInButtons.map(this.makeButton, this);
      tour.addStep(id, options);

      // Step up events for the current step
      let currentStep = tour.steps[index];
      currentStep.on('before-show', () => {
        if (this.get('modal')) {
          const currentElement = this.getElementForStep(currentStep);
          if (currentElement) {
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
        if (currentElement) {
          if (currentStep.options.highlightClass) {
            $(currentElement).removeClass(currentStep.options.highlightClass);
          }
          $('#highlightOverlay').remove();
        }
      });
    });
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
        if (allElementsPresent && (!$(element.selector)[0] || !$(element.selector).is(':visible'))) {
          allElementsPresent = false;
          this.set('errorTitle', element.title);
          this.set('messageForUser', element.message);
        }
      });
    }
    return allElementsPresent;
  }

});
