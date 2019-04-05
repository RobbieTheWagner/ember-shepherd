/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import { get, set } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { getOwner } from '@ember/application';
import { bind, later } from '@ember/runloop';
import { normalizeAttachTo } from '../utils/attachTo';
import { makeButton } from '../utils/buttons';
import {
  elementIsHidden
} from '../utils/dom';
import disableScroll from 'disable-scroll';

/**
 * Interaction with `ember-shepherd` is done entirely through the Tour service, which you can access from any object using the `Ember.inject` syntax:
 *
 * ```js
 * import Component from '@ember/component';
 * import { inject as service } from '@ember/service';
 *
 * export default Component.extend({
 *
 *   tour: service()
 *
 *   // OR
 *
 *   tourService: service('tour')
 * });
 * ```
 * @class Tour
 */
export default Service.extend(Evented, {
  // Configuration Options
  /**
   * `confirmCancel` is a boolean flag, when set to `true` it will pop up a native browser
   * confirm window on cancel, to ensure you want to cancel.
   *
   * @default false
   * @property confirmCancel
   * @type Boolean
   */
  confirmCancel: false,

  /**
   * `confirmCancelMessage` is a string to display in the confirm dialog when `confirmCancel`
   * is set to true.
   *
   * @default null
   * @property confirmCancelMessage
   * @type String
   */
  confirmCancelMessage: null,

  /**
   * `defaultStepOptions` is used to set the options that will be applied to each step by default.
   * You can pass in any of the options that you can with Shepherd.
   *
   * **⚠️ You must set `defaultStepOptions` *BEFORE* calling `addSteps` to set the steps.**
   *
   * It will be an object of a form something like:
   *
   * ```js
   * this.get('tour').set('defaultStepOptions', {
   *   classes: 'custom-class-name-1 custom-class-name-2',
   *   scrollTo: false,
   *   showCancelLink: true
   * });
   * ```
   *
   * > **default value:** `{}`
   *
   * @default {}
   * @property defaultStepOptions
   * @type Object
   */
  defaultStepOptions: {},

  /**
   * `disableScroll` is a boolean, that when set to true, will keep the user from scrolling with the scrollbar,
   * mousewheel, arrow keys, etc. You may want to use this to ensure you are driving the scroll position with the tour.
   *
   * > **default value:** `false`
   *
   * @default false
   * @property disableScroll
   * @type Boolean
   */
  disableScroll: false,

  /**
   * @default null
   * @property errorTitle
   * @type String
   */
  errorTitle: null,

  /**
   * @default false
   * @property isActive
   * @type Boolean
   */
  isActive: false,

  /**
   * @default null
   * @property messageForUser
   * @type String
   */
  messageForUser: null,

  /**
   * `modal` is a boolean, that should be set to true, if you would like the rest of the screen, other than the current element, greyed out, and the current element highlighted. If you do not need modal functionality, you can remove this option or set it to false.
   *
   * > **default value:** `false`
   *
   * @default false
   * @property modal
   * @type Boolean
   */
  modal: false,

  /**
   * `requiredElements` is an array of objects that indicate DOM elements that are **REQUIRED** by your tour and must
   * exist and be visible for the tour to start. If any elements are not present, it will keep the tour from starting.
   *
   * You can also specify a message, which will tell the user what they need to do to make the tour work.
   *
   * **⚠️ You must set `requiredElements` *BEFORE* calling `addSteps` to set the steps.**
   *
   * _Example_
   * ```js
   * this.get('tour').set('requiredElements', [
   *   {
   *     selector: '.search-result-element',
   *     message: 'No search results found. Please execute another search, and try to start the tour again.',
   *     title: 'No results'
   *   },
   *   {
   *     selector: '.username-element',
   *     message: 'User not logged in, please log in to start this tour.',
   *     title: 'Please login'
   *   },
   * ]);
   * ```

   * > **default value:** `[]`
   *
   * @default []
   * @property requiredElements
   * @type Array
   */
  requiredElements: [],
  steps: [],

  willDestroy() {
    this._cleanup();
  },

  /**
   * Take a set of steps and create a tour object based on the current configuration
   *
   * @method addSteps
   * @param {array} steps An array of steps
   * @public
   */
  addSteps(steps) {
    this._initialize();
    const tour = get(this, 'tourObject');

    // Return nothing if there are no steps
    if (isEmpty(steps)) {
      return;
    }
    /* istanbul ignore next: also can't test this due to things attached to root blowing up tests */
    if (!this._requiredElementsPresent()) {
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
  },

  /**
   * Get the tour object and call back
   *
   * @method back
   * @public
   */
  back() {
    get(this, 'tourObject').back();
    this.trigger('back');
  },

  /**
   * Cancel the tour
   *
   * @method cancel
   * @public
   */
  cancel() {
    get(this, 'tourObject').cancel();
  },

  /**
   * Complete the tour
   *
   * @method complete
   * @public
   */
  complete() {
    get(this, 'tourObject').complete();
  },

  /**
   * Hides the current step
   *
   * @method hide
   * @public
   */
  hide() {
    get(this, 'tourObject').hide();
  },

  /**
   * Advance the tour to the next step and trigger next
   *
   * @method next
   * @public
   */
  next() {
    get(this, 'tourObject').next();
    this.trigger('next');
  },

  /**
   * Show a specific step, by passing its id
   *
   * @param id The id of the step you want to show
   * @public
   */
  show(id) {
    get(this, 'tourObject').show(id);
  },

  /**
   * Start the tour
   *
   * @method start
   * @public
   */
  start() {
    set(this, 'isActive', true);
    get(this, 'tourObject').start();
  },

  /**
   * When the tour starts, setup the step event listeners, and disableScroll
   *
   * @method _onTourStart
   * @private
   */
  _onTourStart() {
    if (get(this, 'disableScroll')) {
      disableScroll.on(window);
    }

    this.trigger('start');
  },

  /**
   * This function is called when a tour is completed or cancelled to initiate cleanup.
   *
   * @method _onTourFinish
   * @param {string} [completeOrCancel] 'complete' or 'cancel'
   * @private
   */
  _onTourFinish(completeOrCancel) {
    if (!this.isDestroyed) {
      set(this, 'isActive', false);
    }
    this._cleanup();
    this.trigger(completeOrCancel);
  },

  /**
   * Cleanup disableScroll
   *
   * @method _cleanup
   * @private
   */
  _cleanup() {
    if (get(this, 'disableScroll')) {
      disableScroll.off(window);
    }
  },

  /**
   * Initializes the tour, creates a new Shepherd.Tour. sets options, and binds events
   *
   * @method _initialize
   * @private
   */
  _initialize() {
    const confirmCancel = get(this, 'confirmCancel');
    const confirmCancelMessage = get(this, 'confirmCancelMessage');
    const defaultStepOptions = get(this, 'defaultStepOptions');
    const tourName = get(this, 'tourName');
    const useModalOverlay = get(this, 'modal');

    // Ensure `tippyOptions` exists on `defaultStepOptions`
    defaultStepOptions.tippyOptions = defaultStepOptions.tippyOptions || {};

    let { rootElement } = getOwner(this);
    if (typeof rootElement === 'string') {
      rootElement = document.querySelector(rootElement);
    }

    if (rootElement && !defaultStepOptions.tippyOptions.appendTo) {
      defaultStepOptions.tippyOptions.appendTo = rootElement;
    }

    const tourObject = new Shepherd.Tour({
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions,
      tourName,
      useModalOverlay
    });

    tourObject.on('start', bind(this, '_onTourStart'));
    tourObject.on('complete', bind(this, '_onTourFinish', 'complete'));
    tourObject.on('cancel', bind(this, '_onTourFinish', 'cancel'));

    set(this, 'tourObject', tourObject);
  },

  /**
   * Observes the array of requiredElements, which are the elements that must be present at the start of the tour,
   * and determines if they exist, and are visible, if either is false, it will stop the tour from executing.
   *
   * @method _requiredElementsPresent
   * @private
   */
  _requiredElementsPresent() {
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
  }
});
