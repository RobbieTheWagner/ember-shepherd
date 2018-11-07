/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import { get, set } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { bind, debounce, later } from '@ember/runloop';
import { normalizeAttachTo } from '../utils/attachTo';
import { makeButton } from '../utils/buttons';
import { cleanupModal, cleanupSteps, cleanupStepEventListeners, unhighlightStepTarget } from '../utils/cleanup';
import {
  elementIsHidden,
  getElementForStep,
  toggleShepherdModalClass
} from '../utils/dom';

import {
  getModalMaskOpening,
  createModalOverlay,
  positionModalOpening,
  closeModalOpening,
  classNames as modalClassNames
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
    this._cleanup();
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
   * Complete the tour
   * @public
   */
  complete() {
    get(this, 'tourObject').complete();
  },

  /**
   * Hides the current step
   * @public
   */
  hide() {
    get(this, 'tourObject').hide();
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

  /**
   * Start the tour
   * @public
   */
  start() {
    set(this, 'isActive', true);
    get(this, 'tourObject').start();
  },

  /**
   * When the tour starts, setup the modal overlay, step event listeners, and disableScroll
   */
  onTourStart() {
    this._initModalOverlay();
    this._addStepEventListeners();

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
    this._cleanup();
    this.trigger(completeOrCancel);
  },

  /**
   * Cleanup the modal leftovers, like the overlay and highlight, so they don't hang around.
   * @private
   */
  _cleanup() {
    if (get(this, 'disableScroll')) {
      disableScroll.off(window);
    }

    cleanupStepEventListeners.bind(this)();
    cleanupSteps(this.tourObject);
    cleanupModal.bind(this)();
  },

  /**
   * Initializes the tour, creates a new Shepherd.Tour. sets options, and binds events
   * @private
   */
  _initialize() {
    const confirmCancel = get(this, 'confirmCancel');
    const confirmCancelMessage = get(this, 'confirmCancelMessage');
    const defaultStepOptions = get(this, 'defaultStepOptions');

    const tourObject = new Shepherd.Tour({
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions
    });

    tourObject.on('start', bind(this, 'onTourStart'));
    tourObject.on('complete', bind(this, 'onTourFinish', 'complete'));
    tourObject.on('cancel', bind(this, 'onTourFinish', 'cancel'));

    set(this, 'tourObject', tourObject);
    this._initModalOverlay();
  },

  /**
   * If modal is enabled, setup the svg mask opening and modal overlay for the step
   * @param step
   * @private
   */
  _setupModalForStep(step) {
    if (!this.modal) {
      this._showOrHideModal('hide');

    } else {
      this._styleModalOpeningForStep(step);
      this._showOrHideModal('show');
    }
  },

  /**
   * Modulates the styles of the passed step's target element, based on the step's options and
   * the tour's `modal` option, to visually emphasize the element
   *
   * @param step The step object that attaches to the element
   * @private
   */
  _styleTargetElementForStep(step) {
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

  /**
   * Take a set of steps and create a tour object based on the current configuration
   * @param {Array} steps An array of steps
   * @private
   */
  addSteps(steps) {
    this._initialize();
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
        options.buttons = options.buttons.map(makeButton.bind(this), this);
      }

      options.attachTo = normalizeAttachTo(options.attachTo);
      tour.addStep(id, options);

      // Step up events for the current step
      const currentStep = tour.steps[index];

      currentStep.on('before-show', () => {
        this._setupModalForStep(currentStep);
        this._styleTargetElementForStep(currentStep);
      });

      // Remove any modal and target-element highlight styling
      ['hide', 'destroy'].forEach(event => {
        currentStep.on(event, () => {
          unhighlightStepTarget(currentStep);
          this._showOrHideModal('hide');
        });
      });

      if (!currentStep.options.scrollToHandler) {
        currentStep.options.scrollToHandler = (elem) => {
          // Allow scrolling so scrollTo works.
          disableScroll.off(window);

          if (typeof elem !== 'undefined') {
            elem.scrollIntoView();
          }

          later(() => {
            if (get(this, 'disableScroll')) {
              disableScroll.on(window);
            }
          }, 50);
        };
      }
    });
  },

  /**
   * Add resize and scroll listeners to window
   * @private
   */
  _addStepEventListeners() {
    if (typeof this._onScreenChange === 'function') {
      window.removeEventListener('resize', this._onScreenChange, false);
      window.removeEventListener('scroll', this._onScreenChange, false);
    }

    window.addEventListener('resize', this._onScreenChange, false);
    window.addEventListener('scroll', this._onScreenChange, false);
  },

  _initModalOverlay() {
    if (!this._modalOverlayElem) {
      this._modalOverlayElem = createModalOverlay();
      this._modalOverlayOpening = getModalMaskOpening(this._modalOverlayElem);

      this._showOrHideModal('hide');

      document.body.appendChild(this._modalOverlayElem);
    }
  },

  _styleModalOpeningForStep(step) {
    const modalOverlayOpening = this._modalOverlayOpening;
    const targetElement = getElementForStep(step);

    if (targetElement) {
      positionModalOpening(targetElement, modalOverlayOpening);

      this._onScreenChange = () => {
        debounce(
          this,
          () => { positionModalOpening(targetElement, modalOverlayOpening); },
          50,
          true
        );
      };

      this._addStepEventListeners();

    } else {
      closeModalOpening(this._modalOverlayOpening);
    }
  },

  /**
   * Show or hide the modal
   * @param {string} showOrHide 'show' or 'hide'
   * @private
   */
  _showOrHideModal(showOrHide) {
    const show = showOrHide === 'show';

    if (show) {
      document.body.classList.add(modalClassNames.isVisible);
    } else {
      document.body.classList.remove(modalClassNames.isVisible);
    }


    if (this._modalOverlayElem) {
      this._modalOverlayElem.style.display = show ? 'block' : 'none';
    }
  }
});
