/* eslint-disable ember/no-observers */

import { get, observer, set } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import $ from 'jquery';
import { inject as service } from '@ember/service';
import Evented from '@ember/object/evented';
import Service from '@ember/service';
import { run } from '@ember/runloop';

export default Service.extend(Evented, {
  window: service(),

  // Configuration Options
  autoStart: false,
  confirmCancel: false,
  confirmCancelMessage: null,
  defaults: {},
  disableScroll: false,
  errorTitle: null,
  isActive: false,
  messageForUser: null,
  modal: false,
  requiredElements: [],
  steps: [],

  start() {
    set(this, 'isActive', true);
    get(this, 'tourObject').start();
  },

  /**
   * Get the tour object and call back
   * @public
   */
  back() {
    get(this, 'tourObject').back();
    this.trigger('back');
  },

  /**
   * Cancel the tour
   * @public
   */
  cancel() {
    get(this, 'tourObject').cancel();
  },

  /**
   * Advance the tour to the next step and trigger next
   * @public
   */
  next() {
    get(this, 'tourObject').next();
    this.trigger('next');
  },

  /**
   * Show a specific step, by passing its id
   * @param id The id of the step you want to show
   * @public
   */
  show(id) {
    get(this, 'tourObject').show(id);
  },

  onTourStart() {
    if (get(this, 'modal')) {
      const shepherdOverlay = document.createElement('div');
      shepherdOverlay.id = 'shepherdOverlay';
      document.body.appendChild(shepherdOverlay);
    }
    if (get(this, 'disableScroll')) {
      disableScroll.on(window);
    }
    this.trigger('start');
  },

  onTourComplete() {
    set(this, 'isActive', false);
    this.cleanup();
    this.trigger('complete');
  },

  onTourCancel() {
    set(this, 'isActive', false);
    this.cleanup();
    this.trigger('cancel');
  },

  /**
   * Cleanup the modal leftovers, like the overlay and highlight, so they don't hang around.
   * @private
   */
  cleanup() {
    if (get(this, 'disableScroll')) {
      disableScroll.off(window);
    }
    if (get(this, 'modal')) {
      const tour = get(this, 'tourObject');

      if (tour) {
        const { steps } = tour;

        steps.map((step) => {
          const stepElement = this.getElementForStep(step);

          if (step && step.options.attachTo && stepElement) {
            stepElement.style.pointerEvents = 'auto';
          }
        });
      }
      run('afterRender', () => {
        $('#shepherdOverlay').remove();
        $('#highlightOverlay').remove();
        $('.shepherd-modal').removeClass('shepherd-modal');
      });
    }
  },

  /**
   * Creates an overlay element clone of the element you want to highlight and copies all the styles.
   * @param step The step object that points to the element to highlight
   * @private
   */
  createHighlightOverlay(step) {
    $('#highlightOverlay').remove();
    const currentElement = this.getElementForStep(step);

    if (currentElement) {
      const highlightElement = $(currentElement).clone();

      highlightElement.attr('id', 'highlightOverlay');
      $('body').append(highlightElement);

      this.setComputedStylesOnClonedElement(currentElement, highlightElement);

      // Style all internal elements as well
      const children = $(currentElement).children();

      const clonedChildren = highlightElement.children();

      for (let i = 0; i < children.length; i++) {
        this.setComputedStylesOnClonedElement(children[0], clonedChildren);
      }

      this.setPositionForHighlightElement({
        currentElement,
        highlightElement
      });

      $(window).on('resize', () => {
        run.debounce(this, 'setPositionForHighlightElement', {
          currentElement,
          highlightElement
        }, 50);
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
    const { options: { attachTo } } = step;

    if (!attachTo) {
      return null;
    }

    const type = typeof attachTo;

    let element;

    if (type === 'string') {
      element = this.getElementFromString(attachTo);
    } else if (type === 'object') {
      element = this.getElementFromObject(attachTo);
    } else {
      /* istanbul ignore next: cannot test undefined attachTo, but it does work! */
      element = null;
    }
    return element;
  },

  /**
   * Set computed styles on the cloned element
   *
   * @method setComputedStylesOnClonedElement
   * @param element element we want to copy
   * @param clonedElement cloned element above the overlay
   * @private
   */
  setComputedStylesOnClonedElement(element, clonedElement) {
    const computedStyle = window.getComputedStyle(element, null);

    for (let i = 0; i < computedStyle.length; i++) {
      const propertyName = computedStyle[i];

      clonedElement[0].style[propertyName] = computedStyle.getPropertyValue(propertyName);
    }
  },

  /**
   * This wraps the cancel function in a confirm dialog
   * @param  {boolean} confirmCancel Whether to show the dialog or not
   * @param  {string} confirmCancelMessage The message to display
   * @param  {object} tourObject The tour object
   * @private
   */
  wrapCancelFunction(confirmCancel, confirmCancelMessage, tourObject) {
    const cancelFunction = tourObject.cancel;

    if (confirmCancel) {
      const cancelMessage = confirmCancelMessage || 'Are you sure you want to stop the tour?';

      const newCancelFunction = () => {
        const stopTour = get(this, 'window').confirm(cancelMessage);
        if (stopTour) {
          cancelFunction();
        }
      };
      tourObject.cancel = newCancelFunction;
    }
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

    return $(op)[0];
  },

  /**
   * Get the element from an option string
   *
   * @method getElementFromString
   * @param element the string in the step configuration
   * @returns {Element} the element from the string
   * @private
   */
  getElementFromString(element) {
    const attachTo = element.split(' ');

    attachTo.pop();
    const selector = attachTo.join(' ');

    return $(selector)[0];
  },

  initialize() {
    const defaults = get(this, 'defaults');

    const tourObject = new Shepherd.Tour({
      defaults
    });

    // Allow for confirm cancel dialog
    this.wrapCancelFunction(get(this, 'confirmCancel'), get(this, 'confirmCancelMessage'), tourObject);

    tourObject.on('start', run.bind(this, 'onTourStart'));
    tourObject.on('complete', run.bind(this, 'onTourComplete'));
    tourObject.on('cancel', run.bind(this, 'onTourCancel'));
    set(this, 'tourObject', tourObject);
  },

  /**
   * Creates a button of the specified type, with the given classes and text
   *
   * @param type The type of button cancel, back, or next
   * @param classes Classes to apply to the button
   * @param text The text for the button
   * @param action The action to call
   * @returns {{action: *, classes: *, text: *}}
   * @private
   */
  makeButton({ type, classes, text, action }) {
    if (type === 'cancel') {
      action = run.bind(this, function() {
        this.cancel();
      });
    } else if (type === 'back') {
      action = run.bind(this, function() {
        this.back();
      });
    } else if (type === 'next') {
      action = run.bind(this, function() {
        this.next();
      });
    } else {
      action = action || function() {};
    }
    return {
      action,
      classes,
      text
    };
  },

  /**
   * Check if attachTo is an object, if it is, put element and on into a string,
   * if it is already a string, just return that string
   *
   * @param attachTo
   * @returns {*}
   * @private
   */
  normalizeAttachTo(attachTo) {
    if (attachTo && typeof attachTo.element === 'string' && typeof attachTo.on === 'string') {
      return `${attachTo.element} ${attachTo.on}`;
    } else {
      return attachTo;
    }
  },

  /**
   * Modulates the styles of the passed step's target element, based on the step's options and
   * the tour's `modal` option, to visually emphasize the element
   *
   * @param step The step object that attaches to the element
   * @private
   */
  popoutElement(step) {
    const currentElement = this.getElementForStep(step);

    if (currentElement) {
      if (step.options.highlightClass) {
        $(currentElement).addClass(step.options.highlightClass);
      }

      if (get(this, 'modal')) {
        currentElement.style.pointerEvents = 'none';

        if (step.options.copyStyles) {
          this.createHighlightOverlay(step);
        } else {
          $('.shepherd-modal').removeClass('shepherd-modal');
          $(currentElement).addClass('shepherd-modal');
        }
      }
    }
  },

  /**
   * Observes the array of requiredElements, which are the elements that must be present at the start of the tour,
   * and determines if they exist, and are visible, if either is false, it will stop the tour from executing.
   * @private
   */
  requiredElementsPresent() {
    let allElementsPresent = true;

    const requiredElements = get(this, 'requiredElements');

    if (isPresent(requiredElements)) {
      requiredElements.forEach((element) => {
        if (allElementsPresent && (!$(element.selector)[0] || !$(element.selector).is(':visible'))) {
          allElementsPresent = false;
          set(this, 'errorTitle', element.title);
          set(this, 'messageForUser', element.message);
        }
      });
    }
    return allElementsPresent;
  },

  /**
   * Set position of the highlighted element
   *
   * @param currentElement The element that belongs to the step
   * @param highlightElement The cloned element that is above the overlay
   * @private
   */
  setPositionForHighlightElement({ currentElement, highlightElement }) {
    const elementPosition = this._getElementPosition(currentElement);

    highlightElement.css({
      'position': 'absolute',
      'left': elementPosition.left,
      'top': elementPosition.top,
      'width': elementPosition.width,
      'height': elementPosition.height,
      'z-index': 10002
    });
  },

  // TODO: Figure out how to use a computed instead of an observer here
  /**
   * Create a tour object based on the current configuration
   * @private
   */
  stepsChange: observer('steps', function() {
    this.initialize();
    const steps = get(this, 'steps');

    const tour = get(this, 'tourObject');

    // Return nothing if there are no steps
    if (isEmpty(steps)) {
      return;
    }
    if (!this.requiredElementsPresent()) {
      tour.addStep('error', {
        buttons: [{
          text: 'Exit',
          action: tour.cancel
        }],
        classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
        copyStyles: false,
        title: get(this, 'errorTitle'),
        text: [get(this, 'messageForUser')]
      });
      return;
    }

    steps.forEach((step, index) => {
      const { id, options } = step;

      options.buttons = options.builtInButtons.map(this.makeButton, this);
      options.attachTo = this.normalizeAttachTo(options.attachTo);
      tour.addStep(id, options);

      // Step up events for the current step
      const currentStep = tour.steps[index];

      currentStep.on('before-show', () => {
        this.popoutElement(currentStep);
      });
      currentStep.on('hide', () => {
        // Remove element copy, if it was cloned
        const currentElement = this.getElementForStep(currentStep);

        if (currentElement) {
          if (currentStep.options.highlightClass) {
            $(currentElement).removeClass(currentStep.options.highlightClass);
          }
          $('#highlightOverlay').remove();
        }
      });

      if (!currentStep.options.scrollToHandler) {
        currentStep.options.scrollToHandler = (elem) => {
          // Allow scrolling so scrollTo works.
          disableScroll.off(window);

          if (typeof elem !== 'undefined') {
            elem.scrollIntoView();
          }

          run.later(() => {
            disableScroll.on(window);
          }, 50);
        };
      }

    });
    if (get(this, 'autoStart')) {
      run.later(() => {
        this.start();
      });
    }
  }),

  /**
   * Taken from introjs https://github.com/usablica/intro.js/blob/master/intro.js#L1092-1124
   * Get an element position on the page
   * Thanks to `meouw`: http://stackoverflow.com/a/442474/375966
   * @private
   */
  _getElementPosition(element) {
    const elementPosition = {
      height: element.offsetHeight,
      width: element.offsetWidth
    };

    // calculate element top and left
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
});
