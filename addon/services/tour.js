/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import { get, set } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { bind, later } from '@ember/runloop';
import { normalizeAttachTo } from '../utils/attachTo';
import { makeButton } from '../utils/buttons';
import {
  elementIsHidden
} from '../utils/dom';


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
   * When the tour starts, setup the step event listeners, and disableScroll
   */
  onTourStart() {
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
   * Cleanup disableScroll
   * @private
   */
  _cleanup() {
    if (get(this, 'disableScroll')) {
      disableScroll.off(window);
    }
  },

  /**
   * Initializes the tour, creates a new Shepherd.Tour. sets options, and binds events
   * @private
   */
  _initialize() {
    const confirmCancel = get(this, 'confirmCancel');
    const confirmCancelMessage = get(this, 'confirmCancelMessage');
    const defaultStepOptions = get(this, 'defaultStepOptions');
    const tourName = get(this, 'tourName');
    const useModalOverlay = get(this, 'modal');

    const tourObject = new Shepherd.Tour({
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions,
      tourName,
      useModalOverlay
    });

    tourObject.on('start', bind(this, 'onTourStart'));
    tourObject.on('complete', bind(this, 'onTourFinish', 'complete'));
    tourObject.on('cancel', bind(this, 'onTourFinish', 'cancel'));

    set(this, 'tourObject', tourObject);
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
  }
});
