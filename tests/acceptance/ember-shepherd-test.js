import { module, test } from 'qunit';
import { visit, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { builtInButtons, steps as defaultSteps } from '../data';

const toggleTour = async (tour, modal) => {
  tour.set('modal', modal);
  await tour.addSteps(defaultSteps);
  return await tour.start();
};

module('Acceptance | Tour functionality tests', function(hooks) {
  let tour;

  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    tour = this.owner.lookup('service:tour');

    tour.set('confirmCancel', false);
    tour.set('modal', true);
  });

  hooks.afterEach(async function() {
    return await tour.complete();
  });

  module('Cancel link', function() {
    test('Shows cancel link', async function(assert) {
      await visit('/docs/demo');

      await toggleTour(tour, true);

      const cancelIcon = document.querySelector('.shepherd-cancel-icon');
      assert.ok(cancelIcon, 'Cancel icon shown');
    });

    test('Hides cancel link', async function(assert) {
      const defaultStepOptions = {
        cancelIcon: {
          enabled: false
        },
        classes: 'shepherd-theme-arrows test-defaults'
      };

      const steps = [{
        attachTo: {
          element: '.first-element',
          on: 'bottom'
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        cancelIcon: {
          enabled: false
        },
        id: 'step-without-cancel-icon'
      }];

      await visit('/docs/demo');

      tour.set('defaultStepOptions', defaultStepOptions);
      await tour.addSteps(steps);

      tour.start();

      assert.notOk(document.querySelector('.shepherd-element button.shepherd-cancel-icon'));
    });

    test('Cancel link cancels the tour', async function(assert) {
      await visit('/docs/demo');

      await toggleTour(tour, true);

      assert.ok(document.body.classList.contains('shepherd-active'), 'Body has class of shepherd-active, when shepherd becomes active');

      await click('.shepherd-content button.shepherd-cancel-icon');

      assert.notOk(document.body.classList.contains('shepherd-active'), 'Body does not have class of shepherd-active, when shepherd becomes inactive');
    });
  });

  module('Required Elements', function() {
    test('Does not warn about required elements when none are specified', async function(assert) {
      await visit('/docs/demo');

      await toggleTour(tour, true);

      const currentStepId = document.body.getAttribute('data-shepherd-step');

      assert.equal(currentStepId, defaultSteps[0].id);
    });


    test('Does not warn about required elements when none are missing', async function(assert) {
      const requiredElements = [
        {
          selector: 'body',
          message: 'Body element not found 🤔',
          title: 'Error'
        }
      ];

      tour.set('requiredElements', requiredElements);

      await visit('/docs/demo');

      await toggleTour(tour, true);

      const currentStepId = document.body.getAttribute('data-shepherd-step');

      assert.equal(currentStepId, defaultSteps[0].id);
    });


    test('Warns about missing required elements when all are not present', async function(assert) {
      const requiredElements = [
        {
          selector: '👻',
          message: '👻 element not found',
          title: 'Missing Required Elements'
        }
      ];

      tour.set('requiredElements', requiredElements);

      await visit('/docs/demo');

      await toggleTour(tour, true);

      const currentStepId = document.body.getAttribute('data-shepherd-step');

      assert.equal(currentStepId, 'error');
    });
  });

  module('Tour options', function() {
    test('Defaults applied', async function(assert) {
      assert.expect(1);

      const stepsWithoutClasses = [
        {
          attachTo: {
            element: '.first-element',
            on: 'bottom'
          },
          buttons: [
            builtInButtons.cancel,
            builtInButtons.next
          ],
          id: 'test-highlight'
        }
      ];

      await visit('/docs/demo');

      await tour.addSteps(stepsWithoutClasses);

      tour.start();

      assert.ok(document.querySelector('.custom-default-class'), 'defaults class applied');
    });

    test('configuration works with attachTo object when element is a simple string', async function(assert) {
      assert.expect(1);

      const steps = [{
        attachTo: {
          element: '.first-element',
          on: 'bottom'
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        id: 'test-attachTo-string'
      }];

      await tour.addSteps(steps);

      await visit('/docs/demo');

      tour.start();

      assert.ok(document.querySelector('.shepherd-element'), 'tour is visible');
    });

    test('configuration works with attachTo object when element is dom element', async function(assert) {
      assert.expect(1);

      await visit('/docs/demo');

      const steps = [{
        attachTo: {
          element: find('.first-element'),
          on: 'bottom'
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        id: 'test-attachTo-dom'
      }];

      await tour.addSteps(steps);
      tour.start();

      assert.ok(document.querySelector('.shepherd-element'), 'tour is visible');
    });

    test('buttons work when type is not specified and passed action is triggered', async function(assert) {
      assert.expect(4);

      let buttonActionCalled = false;

      const steps = [{
        attachTo: {
          element: '.first-element',
          on: 'bottom'
        },
        buttons: [
          {
            classes: 'shepherd-button-secondary button-one',
            text: 'button one'
          },
          {
            classes: 'shepherd-button-secondary button-two',
            text: 'button two',
            action() {
              buttonActionCalled = true;
            }
          },
          {
            classes: 'shepherd-button-secondary button-three',
            text: 'button three'
          }
        ],
        id: 'test-buttons-custom-action'
      }];

      await visit('/docs/demo');

      await tour.addSteps(steps);

      await tour.start();

      assert.ok(document.querySelector('.button-one'), 'tour button one is visible');
      assert.ok(document.querySelector('.button-two'), 'tour button two is visible');
      assert.ok(document.querySelector('.button-three'), 'tour button three is visible');

      await click('.button-two');

      assert.ok(buttonActionCalled, 'button action triggered');
    });

    test('scrollTo works with disableScroll on', async function(assert) {
      assert.expect(2);
      // Setup controller tour settings
      tour.set('disableScroll', true);
      tour.set('scrollTo', true);

      // Visit route
      await visit('/docs/demo');

      document.querySelector('#ember-testing-container').scrollTop = 0;

      assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');

      await tour.start();

      await click('.shepherd-content .next-button');

      await click('.shepherd-content .next-button');

      assert.ok(document.querySelector('#ember-testing-container').scrollTop > 0, 'Scrolled down correctly');
    });

    test('scrollTo works with a custom scrollToHandler', async function(assert) {
      assert.expect(2);

      const done = assert.async();

      // Override default behavior
      const steps = [{
        attachTo: {
          element: '.first-element',
          on: 'bottom'
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        id: 'intro',
        scrollTo: true,
        scrollToHandler() {
          document.querySelector('#ember-testing-container').scrollTop = 120;
          assert.equal(document.querySelector('#ember-testing-container').scrollTop, 120, 'Scrolled correctly');
          done();
        }
      }];

      // Visit route
      await visit('/docs/demo');

      await tour.addSteps(steps);

      document.querySelector('#ember-testing-container').scrollTop = 0;
      assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');

      await tour.start();
      await click('.shepherd-content .next-button');
    });

    test('scrollTo works without a custom scrollToHandler', async function(assert) {
      assert.expect(2);
      // Setup controller tour settings
      tour.set('scrollTo', true);

      // Visit route
      await visit('/docs/demo');

      document.querySelector('#ember-testing-container').scrollTop = 0;

      assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');

      await tour.start();

      await click('.shepherd-content .next-button');

      assert.ok(document.querySelector('#ember-testing-container').scrollTop > 0, 'Scrolled correctly');
    });

    test('Show by id works', async function(assert) {
      assert.expect(1);

      await visit('/docs/demo');

      tour.show('usage');

      assert.equal(tour.get('tourObject').currentStep.el.querySelector('.shepherd-text').textContent,
        'To use the tour service, simply inject it into your application and use it like this example.',
        'Usage step shown');
    });

    test('hide method hides the current step', async function(assert) {
      assert.expect(1);

      await visit('/docs/demo');

      tour.show('usage');
      tour.hide();

      assert.equal(tour.get('tourObject').currentStep.isOpen(), false, 'The step is hidden');
    });
  });
});
