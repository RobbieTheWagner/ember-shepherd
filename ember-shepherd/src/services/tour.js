/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import { set } from '@ember/object';
import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { getOwner } from '@ember/application';
import { bind } from '@ember/runloop';
import { makeButton } from '../utils/buttons.js';
import { elementIsHidden } from '../utils/dom.js';

/**
 * Interaction with `ember-shepherd` is done entirely through the Tour service, which you can access from any object using the `service` syntax:
 *
 * ```js
 * import Component from '@glimmer/component';
 * import { service } from '@ember/service';
 *
 * export default class MyCoolComponent extends Component {
 *
 *   @service tour;
 *
 *   // OR
 *
 *   @service('tour') tourService;
 * };
 * ```
 *
 * The following configuration options can be `set` on the Tour service to control the way that Shepherd is used. **The only required option is `steps`, which is set via `addSteps`.**
 *
 * @class Tour
 */
export default class TourService extends Service.extend(Evented) {
  // Configuration Options

  /**
   * The prefix to add to all the `shepherd-*` class names.
   *
   * @default undefined
   * @property classPrefix
   * @type String
   */
  classPrefix;

  /**
   * `confirmCancel` is a boolean flag, when set to `true` it will pop up a native browser
   * confirm window on cancel, to ensure you want to cancel.
   *
   * @default false
   * @property confirmCancel
   * @type Boolean
   */
  confirmCancel = false;

  /**
   * `confirmCancelMessage` is a string to display in the confirm dialog when `confirmCancel`
   * is set to true.
   *
   * @default null
   * @property confirmCancelMessage
   * @type String
   */
  confirmCancelMessage = null;

  /**
   * `defaultStepOptions` is used to set the options that will be applied to each step by default.
   * You can pass in any of the options that you can with Shepherd.
   *
   * **⚠️ You must set `defaultStepOptions` *BEFORE* calling `addSteps` to set the steps.**
   *
   * It will be an object of a form something like:
   *
   * ```js
   * this.tour.set('defaultStepOptions', {
   *   classes: 'custom-class-name-1 custom-class-name-2',
   *   scrollTo: true,
   *   cancelIcon: {
   *     enabled: true
   *   },
   * });
   * ```
   *
   * > **default value:** `{}`
   *
   * @default {}
   * @property defaultStepOptions
   * @type Object
   */
  defaultStepOptions = {};

  /**
   * @default null
   * @property errorTitle
   * @type String
   */
  errorTitle = null;

  /**
   * Exiting the tour with the escape key will be enabled unless this is explicitly set to false.
   *
   * @default undefined
   * @property exitOnEsc
   * @type Boolean
   */
  exitOnEsc;

  /**
   * @default false
   * @property isActive
   * @type Boolean
   */
  isActive = false;

  /**
   * Navigating the tour via left and right arrow keys will be enabled unless this is explicitly set to false.
   *
   * @default undefined
   * @property keyboardNavigation
   * @type Boolean
   */
  keyboardNavigation;

  /**
   * @default null
   * @property messageForUser
   * @type String
   */
  messageForUser = null;

  /**
   * `modal` is a boolean, that should be set to true, if you would like the rest of the screen, other than the current element, greyed out, and the current element highlighted. If you do not need modal functionality, you can remove this option or set it to false.
   *
   * > **default value:** `false`
   *
   * @default false
   * @property modal
   * @type Boolean
   */
  modal = false;

  /**
   * An optional container element for the modal. If not set, the modal will be appended to `document.body`.
   * @default undefined
   * @property modalContainer
   * @type HTMLElement
   */
  modalContainer;

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
   * this.tour.set('requiredElements', [
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
  requiredElements = [];
  steps = [];

  /**
   * Take a set of steps, create a tour object based on the current configuration and load the shepherd.js dependency.
   * This method returns a promise which resolves when the shepherd.js dependency has been loaded and shepherd is ready to use.
   *
   * You must pass an array of steps to `addSteps`, something like this:
   *
   * ```js
   * this.tour.addSteps([
   *   {
   *     attachTo: {
   *       element:'.first-element',
   *       on: 'bottom'
   *     },
   *     beforeShowPromise: function() {
   *       return new Promise(function(resolve) {
   *         Ember.run.scheduleOnce('afterRender', this, function() {
   *           window.scrollTo(0, 0);
   *           this.get('documents.firstObject').set('isSelected', true);
   *           resolve();
   *         });
   *       });
   *     },
   *     buttons: [
   *       {
   *         classes: 'shepherd-button-secondary',
   *         text: 'Exit',
   *         type: 'cancel'
   *       },
   *       {
   *         classes: 'shepherd-button-primary',
   *         text: 'Back',
   *         type: 'back'
   *       },
   *       {
   *         classes: 'shepherd-button-primary',
   *         text: 'Next',
   *         type: 'next'
   *       }
   *     ],
   *     cancelIcon: {
   *       enabled: true
   *     },
   *     classes: 'custom-class-name-1 custom-class-name-2',
   *     highlightClass: 'highlight',
   *     id: 'intro',
   *     scrollTo: false,
   *     title: 'Welcome to Ember-Shepherd!',
   *     text: 'Ember-Shepherd is a JavaScript library for guiding users through your Ember app.',
   *     when: {
   *       show: () => {
   *         console.log('show step');
   *       },
   *       hide: () => {
   *         console.log('hide step');
   *       }
   *     }
   *   },
   * ...
   * ]);
   * ```
   *
   * @method addSteps
   * @param {array} steps An array of steps
   * @returns {Promise} Promise that resolves when everything has been set up and shepherd is ready to use
   * @public
   */
  addSteps(steps) {
    return this._initialize().then(() => {
      const tour = this.tourObject;

      // Return nothing if there are no steps
      if (isEmpty(steps)) {
        return;
      }
      /* istanbul ignore next: also can't test this due to things attached to root blowing up tests */
      if (!this._requiredElementsPresent()) {
        tour.addStep({
          buttons: [
            {
              text: 'Exit',
              action: tour.cancel,
            },
          ],
          id: 'error',
          title: this.errorTitle,
          text: this.messageForUser,
        });
        return;
      }

      steps.forEach((step) => {
        if (step.buttons) {
          step.buttons = step.buttons.map(makeButton.bind(this), this);
        }

        tour.addStep(step);
      });
    });
  }

  /**
   * Get the tour object and call back
   *
   * @method back
   * @public
   */
  back() {
    this.tourObject.back();
    this.trigger('back');
  }

  /**
   * Cancel the tour
   *
   * @method cancel
   * @public
   */
  cancel() {
    this.tourObject.cancel();
  }

  /**
   * Complete the tour
   *
   * @method complete
   * @public
   */
  complete() {
    this.tourObject.complete();
  }

  /**
   * Hides the current step
   *
   * @method hide
   * @public
   */
  hide() {
    this.tourObject.hide();
  }

  /**
   * Advance the tour to the next step and trigger next
   *
   * @method next
   * @public
   */
  next() {
    this.tourObject.next();
    this.trigger('next');
  }

  /**
   * Show a specific step, by passing its id
   *
   * @param {string} [id] The id of the step you want to show
   * @method show
   * @public
   */
  show(id) {
    this.tourObject.show(id);
  }

  /**
   * Start the tour. The Promise from addSteps() must be in a resolved state prior to starting the tour!
   *
   * @method start
   * @public
   */
  start() {
    const tourObject = this.tourObject;
    if (tourObject == undefined) {
      throw new Error(
        'the Promise from addSteps must be in a resolved state before the tour can be started',
      );
    }
    set(this, 'isActive', true);
    tourObject.start();
  }

  /**
   * When the tour starts, setup the step event listeners
   *
   * @method _onTourStart
   * @private
   */
  _onTourStart() {
    this.trigger('start');
  }

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
    this.trigger(completeOrCancel);
  }

  /**
   * Initializes the tour, creates a new Shepherd.Tour. sets options, and binds events
   *
   * @method _initialize
   * @private
   */
  _initialize() {
    const {
      classPrefix,
      confirmCancel,
      confirmCancelMessage,
      defaultStepOptions,
      exitOnEsc,
      keyboardNavigation,
      modal,
      modalContainer,
      tourName,
    } = this;

    // Ensure `popperOptions` exists on `defaultStepOptions`
    defaultStepOptions.popperOptions = defaultStepOptions.popperOptions || {};

    let { rootElement } = getOwner(this);
    if (typeof rootElement === 'string') {
      rootElement = document.querySelector(rootElement);
    }

    // TODO: add something back here when we add `appendTo` support
    // if (rootElement && !defaultStepOptions.tippyOptions.appendTo) {
    //   defaultStepOptions.tippyOptions.appendTo = rootElement;
    // }

    return import('shepherd.js').then((module) => {
      const Shepherd = module.default;
      const tourObject = new Shepherd.Tour({
        classPrefix,
        confirmCancel,
        confirmCancelMessage,
        defaultStepOptions,
        exitOnEsc,
        keyboardNavigation,
        modalContainer: modalContainer || document.body,
        tourName,
        useModalOverlay: modal,
      });

      tourObject.on('start', bind(this, '_onTourStart'));
      tourObject.on('complete', bind(this, '_onTourFinish', 'complete'));
      tourObject.on('cancel', bind(this, '_onTourFinish', 'cancel'));

      set(this, 'tourObject', tourObject);
    });
  }

  /**
   * Observes the array of requiredElements, which are the elements that must be present at the start of the tour,
   * and determines if they exist, and are visible, if either is false, it will stop the tour from executing.
   *
   * @method _requiredElementsPresent
   * @private
   */
  _requiredElementsPresent() {
    let allElementsPresent = true;

    const requiredElements = this.requiredElements;

    if (isPresent(requiredElements)) {
      /* istanbul ignore next: also can't test this due to things attached to root blowing up tests */
      requiredElements.forEach((element) => {
        const selectedElement = document.querySelector(element.selector);

        if (
          allElementsPresent &&
          (!selectedElement || elementIsHidden(selectedElement))
        ) {
          allElementsPresent = false;
          set(this, 'errorTitle', element.title);
          set(this, 'messageForUser', element.message);
        }
      });
    }
    return allElementsPresent;
  }
}
