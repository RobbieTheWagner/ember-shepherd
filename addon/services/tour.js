/* eslint-disable ember/avoid-leaking-state-in-ember-objects, ember/no-observers */

import { get, observer, set } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { run } from '@ember/runloop';
import {
  elementIsHidden,
  getElementForStep,
  removeElement,
  setPositionForHighlightElement,
  toggleShepherdModalClass
} from '../utils';

export default Service.extend(Evented, {
  // Configuration Options
  confirmCancel: false,
  confirmCancelMessage: null,
  defaults: {},
  disableScroll: false,
  errorTitle: null,
  isActive: false,
  messageForUser: null,
  modal: false,
  modalContainer: 'body',
  requiredElements: [],
  steps: [],

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

  start() {
    set(this, 'isActive', true);
    get(this, 'tourObject').start();
  },

  onTourStart() {
    if (get(this, 'modal')) {
      const shepherdOverlay = document.createElement('div');
      shepherdOverlay.id = 'shepherdOverlay';
      const parent = document.querySelector(get(this, 'modalContainer'));
      parent.appendChild(shepherdOverlay);
    }
    if (get(this, 'disableScroll')) {
      disableScroll.on(window);
    }
    this.trigger('start');
  },

  /**
   * This function is called when a tour is completed or cancelled to initiate cleanup.
   * @param {string} completeOrCancel 'complete' or 'cancel'
   */
  onTourFinish(completeOrCancel) {
    set(this, 'isActive', false);
    this.cleanup();
    this.trigger(completeOrCancel);
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
          const stepElement = getElementForStep(step);

          if (step && step.options.attachTo && stepElement) {
            stepElement.style.pointerEvents = 'auto';
          }
        });
      }
      run('afterRender', () => {
        removeElement('#shepherdOverlay');
        removeElement('#highlightOverlay');

        const shepherdModal = document.querySelector('.shepherd-modal');

        if (shepherdModal) {
          shepherdModal.classList.remove('shepherd-modal');
        }
      });
    }
  },

  /**
   * Creates an overlay element clone of the element you want to highlight and copies all the styles.
   * @param step The step object that points to the element to highlight
   * @private
   */
  createHighlightOverlay(step) {
    removeElement('#highlightOverlay');

    const currentElement = getElementForStep(step);

    if (currentElement) {
      const highlightElement = currentElement.cloneNode(true);

      highlightElement.setAttribute('id', 'highlightOverlay');
      document.body.appendChild(highlightElement);

      this.setComputedStylesOnClonedElement(currentElement, highlightElement);

      // Style all internal elements as well
      const { children } = currentElement;

      const clonedChildren = highlightElement.children;

      for (let i = 0; i < children.length; i++) {
        this.setComputedStylesOnClonedElement(children[i], clonedChildren[i]);
      }

      setPositionForHighlightElement({
        currentElement,
        highlightElement
      });

      window.addEventListener('resize', () => {
        run.debounce(this, setPositionForHighlightElement, {
          currentElement,
          highlightElement
        }, 50);
      });
    }
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

      clonedElement.style[propertyName] = computedStyle.getPropertyValue(propertyName);
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
        const stopTour = window.confirm(cancelMessage);
        if (stopTour) {
          cancelFunction();
        }
      };
      tourObject.cancel = newCancelFunction;
    }
  },

  initialize() {
    const defaults = get(this, 'defaults');

    const tourObject = new Shepherd.Tour({
      defaults
    });

    // Allow for confirm cancel dialog
    this.wrapCancelFunction(get(this, 'confirmCancel'), get(this, 'confirmCancelMessage'), tourObject);

    tourObject.on('start', run.bind(this, 'onTourStart'));
    tourObject.on('complete', run.bind(this, 'onTourFinish', 'complete'));
    tourObject.on('cancel', run.bind(this, 'onTourFinish', 'cancel'));
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
    const builtInButtonTypes = ['back', 'cancel', 'next'];
    if (builtInButtonTypes.includes(type)) {
      action = run.bind(this, function() {
        this[type]();
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
    const currentElement = getElementForStep(step);

    if (!currentElement) {
      return;
    }

    if (step.options.highlightClass) {
      currentElement.classList.add(step.options.highlightClass);
    }

    if (get(this, 'modal')) {
      currentElement.style.pointerEvents = 'none';

      if (step.options.copyStyles) {
        this.createHighlightOverlay(step);
      } else {
        toggleShepherdModalClass(currentElement);
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
      /* istanbul ignore next: also can't test this due to things attached to root blowing up tests */
      requiredElements.forEach((element) => {
        const selectedElement = document.querySelector(element.selector);

        if (allElementsPresent && (!selectedElement || elementIsHidden(selectedElement))) {
          allElementsPresent = false;
          set(this, 'errorTitle', element.title);
          set(this, 'messageForUser', element.message);
        }
      });
    }
    return allElementsPresent;
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
    /* istanbul ignore next: also can't test this due to things attached to root blowing up tests */
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
        const currentElement = getElementForStep(currentStep);

        if (currentElement) {
          if (currentStep.options.highlightClass) {
            currentElement.classList.remove(currentStep.options.highlightClass);
          }

          removeElement('#highlightOverlay');
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
            if (get(this, 'disableScroll')) {
              disableScroll.on(window);
            }
          }, 50);
        };
      }

    });
  })
});
