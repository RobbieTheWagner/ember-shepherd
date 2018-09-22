/* eslint-disable ember/avoid-leaking-state-in-ember-objects, ember/no-observers */
import { get, observer, set } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { run, scheduleOnce } from '@ember/runloop';
import {
  elementIsHidden,
  getElementForStep,
  toggleShepherdModalClass,
} from '../utils/dom';

import {
  getModalMaskOpening,
  createModalOverlay,
  positionModalOpening,
  closeModalOpening,
} from '../utils/modal';


export default Service.extend(Evented, {
  // Configuration Options
  confirmCancel: false,
  confirmCancelMessage: null,
  defaultStepOptions: {},
  disableScroll: false,
  errorTitle: null,
  isActive: false,
  messageForUser: null,
  modal: false,
  requiredElements: [],
  steps: [],

  _modalOverlayElem: null,
  _onScreenChange() {},

  willDestroy() {
    this.cleanup();
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

  start() {
    set(this, 'isActive', true);
    get(this, 'tourObject').start();
  },

  onTourStart() {
    this.initModalOverlay();
    this.addStepEventListeners();

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
    if (!this.isDestroyed) {
      set(this, 'isActive', false);
    }
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

    this.cleanupStepEventListeners();
    this.cleanupSteps();
    this.cleanupModal();
  },

  initialize() {
    const confirmCancel = get(this, 'confirmCancel');
    const confirmCancelMessage = get(this, 'confirmCancelMessage');
    const defaultStepOptions = get(this, 'defaultStepOptions');

    const tourObject = new Shepherd.Tour({
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions
    });

    tourObject.on('start', run.bind(this, 'onTourStart'));
    tourObject.on('complete', run.bind(this, 'onTourFinish', 'complete'));
    tourObject.on('cancel', run.bind(this, 'onTourFinish', 'cancel'));

    this.tourObject = tourObject;
    this.initModalOverlay();
  },

  /**
   * Creates a button of the specified type, with the given classes and text
   *
   * @param button.type The type of button cancel, back, or next
   * @param button.classes Classes to apply to the button
   * @param button.text The text for the button
   * @param button.action The action to call
   * @returns {{action: *, classes: *, text: *}}
   * @private
   */
  makeButton(button) {
    const { type, classes, text } = button;

    if (!type) {
      return button;
    }

    const builtInButtonTypes = ['back', 'cancel', 'next'];
    if (builtInButtonTypes.includes(type)) {
      const action = run.bind(this, function() {
        this[type]();
      });

      return {
        action,
        classes,
        text
      };
    }
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

  setupModalForStep(step) {
    if (!this.modal) {
      this.hideModal();

    } else {
      this.styleModalOpeningForStep(step);
      this.showModal();
    }
  },

  /**
   * Modulates the styles of the passed step's target element, based on the step's options and
   * the tour's `modal` option, to visually emphasize the element
   *
   * @param step The step object that attaches to the element
   * @private
   */
  styleTargetElementForStep(step) {
    const targetElement = getElementForStep(step);

    if (!targetElement) {
      return;
    }

    toggleShepherdModalClass(targetElement);

    if (step.options.highlightClass) {
      targetElement.classList.add(step.options.highlightClass);
    }

    if (step.options.canClickTarget === false) {
      targetElement.style.pointerEvents = 'none';
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
        title: get(this, 'errorTitle'),
        text: [get(this, 'messageForUser')]
      });
      return;
    }

    steps.forEach((step, index) => {
      const { id, options } = step;

      if (options.buttons) {
        options.buttons = options.buttons.map(this.makeButton, this);
      }
      options.attachTo = this.normalizeAttachTo(options.attachTo);
      tour.addStep(id, options);

      // Step up events for the current step
      const currentStep = tour.steps[index];

      currentStep.on('before-show', () => {
        this.setupModalForStep(currentStep);
        this.styleTargetElementForStep(currentStep);
      });

      currentStep.on('hide', () => {
        // Remove any modal and target-element highlight styling
        const targetElement = getElementForStep(currentStep);

        if (targetElement) {
          if (currentStep.options.highlightClass) {
            targetElement.classList.remove(currentStep.options.highlightClass);
          }

          this.hideModal();
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
  }),

  initModalOverlay() {
    if (!this._modalOverlayElem) {
      this._modalOverlayElem = createModalOverlay();
      this._modalOverlayOpening = getModalMaskOpening(this._modalOverlayElem);

      this.hideModal();

      document.body.appendChild(this._modalOverlayElem);
    }
  },

  styleModalOpeningForStep(step) {
    const modalOverlayOpening = this._modalOverlayOpening;
    const targetElement = getElementForStep(step);

    if (targetElement) {
      positionModalOpening(targetElement, modalOverlayOpening);

      this._onScreenChange = () => {
        run.debounce(
          this,
          () => { positionModalOpening(targetElement, modalOverlayOpening) },
          50
        );
      };

      this.addStepEventListeners();

    } else {
      closeModalOpening(this._modalOverlayOpening);
    }
  },

  showModal() {
    if (this._modalOverlayElem) {
      this._modalOverlayElem.style.display = 'block';
    }
  },

  hideModal() {
    if (this._modalOverlayElem) {
      this._modalOverlayElem.style.display = 'none';
    }
  },

  addStepEventListeners() {
    if (typeof this._onScreenChange === 'function') {
      window.removeEventListener('resize', this._onScreenChange, false);
      window.removeEventListener('scroll', this._onScreenChange, false);
    }

    window.addEventListener('resize', this._onScreenChange, false);
    window.addEventListener('scroll', this._onScreenChange, false);
  },


  cleanupStepEventListeners() {
    if (typeof this._onScreenChange === 'function') {
      window.removeEventListener('resize', this._onScreenChange, false);
      window.removeEventListener('scroll', this._onScreenChange, false);

      this._onScreenChange = null;
    }
  },

  cleanupSteps() {
    const tour = this.tourObject;

    if (tour) {
      const { steps } = tour;

      steps.forEach((step) => {
        if (step.options && step.options.canClickTarget === false && step.options.attachTo) {
          const stepElement = getElementForStep(step);

          if (stepElement instanceof HTMLElement) {
            stepElement.style.pointerEvents = 'auto';
          }
        }
      });
    }
  },

  cleanupModal() {
    scheduleOnce('afterRender', this, () => {
      const element = this._modalOverlayElem;

      if (element && element instanceof SVGElement) {
        element.parentNode.removeChild(element);
      }

      this._modalOverlayElem = null;
    });
  },
});
