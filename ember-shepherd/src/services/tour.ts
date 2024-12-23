import { isEmpty, isPresent } from '@ember/utils';
import Service from '@ember/service';
import Evented from '@ember/object/evented';
import { registerDestructor } from '@ember/destroyable';
import type Owner from '@ember/owner';
import { bind } from '@ember/runloop';
import { isTesting } from '@embroider/macros';
import { tracked } from '@glimmer/tracking';

import { type StepOptions, type Tour } from 'shepherd.js';

import { type EmberShepherdButton, makeButton } from '../utils/buttons.ts';
import { elementIsHidden } from '../utils/dom.ts';

interface EmberShepherdStepOptions extends Omit<StepOptions, 'buttons'> {
  buttons?: Array<EmberShepherdButton>;
}

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
  declare tourName?: string;

  // Configuration Options

  /**
   * The prefix to add to all the `shepherd-*` class names.
   *
   * @default undefined
   * @property classPrefix
   * @type String
   */
  @tracked classPrefix?: string;

  /**
   * `confirmCancel` is a boolean flag, when set to `true` it will pop up a native browser
   * confirm window on cancel, to ensure you want to cancel.
   *
   * @default false
   * @property confirmCancel
   * @type Boolean
   */
  @tracked confirmCancel = false;

  /**
   * `confirmCancelMessage` is a string to display in the confirm dialog when `confirmCancel`
   * is set to true.
   *
   * @default undefined
   * @property confirmCancelMessage
   * @type String
   */
  @tracked confirmCancelMessage?: string;

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
  @tracked defaultStepOptions: StepOptions = {};

  /**
   * @default undefined
   * @property errorTitle
   * @type String
   */
  @tracked errorTitle?: string;

  /**
   * Exiting the tour with the escape key will be enabled unless this is explicitly set to false.
   *
   * @default undefined
   * @property exitOnEsc
   * @type Boolean
   */
  @tracked exitOnEsc?: boolean;

  /**
   * @default false
   * @property isActive
   * @type Boolean
   */
  @tracked isActive = false;

  /**
   * Navigating the tour via left and right arrow keys will be enabled unless this is explicitly set to false.
   *
   * @default undefined
   * @property keyboardNavigation
   * @type Boolean
   */
  @tracked keyboardNavigation?: boolean;

  /**
   * @default undefined
   * @property messageForUser
   * @type String
   */
  @tracked messageForUser?: string;

  /**
   * `modal` is a boolean, that should be set to true, if you would like the rest of the screen, other than the current element, greyed out, and the current element highlighted. If you do not need modal functionality, you can remove this option or set it to false.
   *
   * > **default value:** `false`
   *
   * @default false
   * @property modal
   * @type Boolean
   */
  @tracked modal = false;

  /**
   * An optional container element for the modal. If not set, the modal will be appended to `document.body`.
   * @default undefined
   * @property modalContainer
   * @type HTMLElement
   */
  @tracked modalContainer?: HTMLElement;

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
  @tracked requiredElements = [];

  /**
   * An optional container element for the steps. If not set, the steps will be appended to `document.body`.
   * @default undefined
   * @property stepsContainer
   * @type HTMLElement
   */
  @tracked stepsContainer?: HTMLElement;

  /**
   * A reference to the Shepherd Tour instance.
   *
   * @property tourObject
   * @type Tour
   */
  @tracked declare tourObject?: Tour;

  constructor(owner: Owner) {
    super(owner);

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
  addSteps(steps: Array<EmberShepherdStepOptions>) {
    return this._initialize().then(() => {
      const tour = this.tourObject as Tour;

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
    this.tourObject?.back();
    // @ts-expect-error TODO: refactor away from Evented mixin
    this.trigger('back');
  }

  /**
   * Cancel the tour
   *
   * @method cancel
   * @public
   */
  cancel() {
    this.tourObject?.cancel();
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
    this.trigger('next');
  }

  /**
   * Show a specific step, by passing its id
   *
   * @param {string} [id] The id of the step you want to show
   * @method show
   * @public
   */
  show(id: string) {
    this.tourObject?.show(id);
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
    this.isActive = true;
    tourObject.start();
  }

  /**
   * When the tour starts, setup the step event listeners
   *
   * @method _onTourStart
   * @private
   */
  _onTourStart() {
    // @ts-expect-error TODO: refactor away from Evented mixin
    this.trigger('start');
  }

  /**
   * This function is called when a tour is completed or cancelled to initiate cleanup.
   *
   * @method _onTourFinish
   * @param {string} [completeOrCancel] 'complete' or 'cancel'
   * @private
   */
  _onTourFinish(completeOrCancel: 'complete' | 'cancel') {
    if (!this.isDestroyed) {
      this.isActive = false;
    }
    // @ts-expect-error TODO: refactor away from Evented mixin
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
      tourName,
    } = this;

    // Ensure `floatingUIOptions` exists on `defaultStepOptions`
    defaultStepOptions.floatingUIOptions =
      defaultStepOptions.floatingUIOptions || {};

    return import('shepherd.js').then((module) => {
      const Shepherd = module.default;
      const tourObject = new Shepherd.Tour({
        classPrefix,
        confirmCancel,
        confirmCancelMessage,
        defaultStepOptions,
        exitOnEsc,
        keyboardNavigation,
        modalContainer:
          modalContainer ??
          (isTesting()
            ? (document.querySelector('#ember-testing') as HTMLElement)
            : document.body),
        stepsContainer:
          stepsContainer ??
          (isTesting()
            ? (document.querySelector('#ember-testing') as HTMLElement)
            : document.body),
        tourName,
        useModalOverlay: modal,
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
      requiredElements.forEach(
        (element: { message: string; selector: string; title: string }) => {
          const selectedElement = document.querySelector(element.selector);

          if (
            allElementsPresent &&
            (!selectedElement ||
              elementIsHidden(selectedElement as HTMLElement))
          ) {
            allElementsPresent = false;
            this.errorTitle = element.title;
            this.messageForUser = element.message;
          }
        },
      );
    }
    return allElementsPresent;
  }
}
