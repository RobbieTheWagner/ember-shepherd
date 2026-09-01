import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { registerDestructor } from '@ember/destroyable';
import { bind } from '@ember/runloop';
import { isTesting } from '@embroider/macros';
import { tracked } from '@glimmer/tracking';
import 'shepherd.js';
import { makeButton } from '../utils/buttons.js';
import { elementIsHidden } from '../utils/dom.js';
import { g, i } from 'decorator-transforms/runtime';

/* eslint-disable ember/no-runloop */
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
class TourService extends Service.extend(Evented) {
  static {
    g(this.prototype, "classPrefix", [tracked]);
  }
  #classPrefix = (i(this, "classPrefix"), void 0); // Configuration Options
  /**
   * The prefix to add to all the `shepherd-*` class names.
   *
   * @default undefined
   * @property classPrefix
   * @type String
   */
  static {
    g(this.prototype, "confirmCancel", [tracked], function () {
      return false;
    });
  }
  #confirmCancel = (i(this, "confirmCancel"), void 0);
  /**
   * `confirmCancel` is a boolean flag, when set to `true` it will pop up a native browser
   * confirm window on cancel, to ensure you want to cancel.
   *
   * @default false
   * @property confirmCancel
   * @type Boolean
   */
  static {
    g(this.prototype, "confirmCancelMessage", [tracked]);
  }
  #confirmCancelMessage = (i(this, "confirmCancelMessage"), void 0);
  /**
   * `confirmCancelMessage` is a string to display in the confirm dialog when `confirmCancel`
   * is set to true.
   *
   * @default undefined
   * @property confirmCancelMessage
   * @type String
   */
  static {
    g(this.prototype, "defaultStepOptions", [tracked], function () {
      return {};
    });
  }
  #defaultStepOptions = (i(this, "defaultStepOptions"), void 0);
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
   * @type StepOptions
   */
  static {
    g(this.prototype, "errorTitle", [tracked]);
  }
  #errorTitle = (i(this, "errorTitle"), void 0);
  /**
   * @default undefined
   * @property errorTitle
   * @type String
   */
  static {
    g(this.prototype, "exitOnEsc", [tracked]);
  }
  #exitOnEsc = (i(this, "exitOnEsc"), void 0);
  /**
   * Exiting the tour with the escape key will be enabled unless this is explicitly set to false.
   *
   * @default undefined
   * @property exitOnEsc
   * @type Boolean
   */
  static {
    g(this.prototype, "isActive", [tracked], function () {
      return false;
    });
  }
  #isActive = (i(this, "isActive"), void 0);
  /**
   * @default false
   * @property isActive
   * @type Boolean
   */
  static {
    g(this.prototype, "keyboardNavigation", [tracked]);
  }
  #keyboardNavigation = (i(this, "keyboardNavigation"), void 0);
  /**
   * Navigating the tour via left and right arrow keys will be enabled unless this is explicitly set to false.
   *
   * @default undefined
   * @property keyboardNavigation
   * @type Boolean
   */
  static {
    g(this.prototype, "messageForUser", [tracked]);
  }
  #messageForUser = (i(this, "messageForUser"), void 0);
  /**
   * @default undefined
   * @property messageForUser
   * @type String
   */
  static {
    g(this.prototype, "modal", [tracked], function () {
      return false;
    });
  }
  #modal = (i(this, "modal"), void 0);
  /**
   * `modal` is a boolean, that should be set to true, if you would like the rest of the screen, other than the current element, greyed out, and the current element highlighted. If you do not need modal functionality, you can remove this option or set it to false.
   *
   * > **default value:** `false`
   *
   * @default false
   * @property modal
   * @type Boolean
   */
  static {
    g(this.prototype, "modalContainer", [tracked]);
  }
  #modalContainer = (i(this, "modalContainer"), void 0);
  /**
   * An optional container element for the modal. If not set, the modal will be appended to `document.body`.
   * @default undefined
   * @property modalContainer
   * @type HTMLElement
   */
  static {
    g(this.prototype, "requiredElements", [tracked], function () {
      return [];
    });
  }
  #requiredElements = (i(this, "requiredElements"), void 0);
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
   * this.tour.requiredElements = [
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
   * ];
   * ```
    * > **default value:** `[]`
   *
   * @default []
   * @property requiredElements
   * @type Array
   */
  static {
    g(this.prototype, "stepsContainer", [tracked]);
  }
  #stepsContainer = (i(this, "stepsContainer"), void 0);
  /**
   * An optional container element for the steps. If not set, the steps will be appended to `document.body`.
   * @default undefined
   * @property stepsContainer
   * @type HTMLElement
   */
  static {
    g(this.prototype, "tourObject", [tracked]);
  }
  #tourObject = (i(this, "tourObject"), void 0);
  /**
   * A reference to the Shepherd Tour instance.
   *
   * @property tourObject
   * @type Tour
   */
  constructor(owner) {
    super(owner);

    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    registerDestructor(this, () => this.tourObject?.cancel());
  }

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
          buttons: [{
            text: 'Exit',
            // eslint-disable-next-line @typescript-eslint/no-misused-promises, @typescript-eslint/unbound-method
            action: tour.cancel
          }],
          id: 'error',
          title: this.errorTitle,
          text: this.messageForUser
        });
        return;
      }
      steps.forEach(step => {
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
    this.tourObject?.back();
    // @ts-expect-error TODO: refactor away from Evented mixin
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    this.trigger('back');
  }

  /**
   * Cancel the tour
   *
   * @method cancel
   * @public
   */
  async cancel() {
    await this.tourObject?.cancel();
  }

  /**
   * Complete the tour
   *
   * @method complete
   * @public
   */
  complete() {
    this.tourObject?.complete();
  }

  /**
   * Hides the current step
   *
   * @method hide
   * @public
   */
  hide() {
    this.tourObject?.hide();
  }

  /**
   * Advance the tour to the next step and trigger next
   *
   * @method next
   * @public
   */
  next() {
    this.tourObject?.next();
    // @ts-expect-error TODO: refactor away from Evented mixin
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
    this.tourObject?.show(id);
  }

  /**
   * Start the tour. The Promise from addSteps() must be in a resolved state prior to starting the tour!
   *
   * @method start
   * @public
   */
  async start() {
    const tourObject = this.tourObject;
    if (tourObject == undefined) {
      throw new Error('the Promise from addSteps must be in a resolved state before the tour can be started');
    }
    this.isActive = true;
    await tourObject.start();
  }

  /**
   * When the tour starts, setup the step event listeners
   *
   * @method _onTourStart
   * @private
   */
  _onTourStart() {
    // @ts-expect-error TODO: refactor away from Evented mixin
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
      this.isActive = false;
    }
    // @ts-expect-error TODO: refactor away from Evented mixin
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
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
      stepsContainer,
      tourName
    } = this;

    // Ensure `floatingUIOptions` exists on `defaultStepOptions`
    defaultStepOptions.floatingUIOptions = defaultStepOptions.floatingUIOptions || {};
    return import('shepherd.js').then(module => {
      const Shepherd = module.default;
      const tourObject = new Shepherd.Tour({
        classPrefix,
        confirmCancel,
        confirmCancelMessage,
        defaultStepOptions,
        exitOnEsc,
        keyboardNavigation,
        modalContainer: modalContainer ?? (isTesting() ? document.querySelector('#ember-testing') : document.body),
        stepsContainer: stepsContainer ?? (isTesting() ? document.querySelector('#ember-testing') : document.body),
        tourName,
        useModalOverlay: modal
      });
      tourObject.on('start', bind(this, '_onTourStart'));
      tourObject.on('complete', bind(this, '_onTourFinish', 'complete'));
      tourObject.on('cancel', bind(this, '_onTourFinish', 'cancel'));
      this.tourObject = tourObject;
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
      requiredElements.forEach(element => {
        const selectedElement = document.querySelector(element.selector);
        if (allElementsPresent && (!selectedElement || elementIsHidden(selectedElement))) {
          allElementsPresent = false;
          this.errorTitle = element.title;
          this.messageForUser = element.message;
        }
      });
    }
    return allElementsPresent;
  }
}

export { TourService as default };
//# sourceMappingURL=tour.js.map
