import { module, test } from 'qunit';
import { visit, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import { builtInButtons } from '../data';


module('Acceptance | Tour functionality tests', function(hooks) {
  let tour;

  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    tour = this.owner.lookup('service:tour');

    tour.set('confirmCancel', false);
    tour.set('modal', false);
  });

  hooks.afterEach(async function() {
    return await tour.cancel();
  });

  test('Shows cancel link', async function(assert) {
    await visit('/');

    await click('.toggleHelpModal');

    const cancelLink = document.querySelector('.shepherd-cancel-link');
    assert.ok(cancelLink, 'Cancel link shown');
  });

  test('Hides cancel link', async function(assert) {
    const defaultStepOptions = {
      classes: 'shepherd-theme-arrows test-defaults',
      showCancelLink: false
    };

    const steps = [{
      id: 'step-without-cancel-link',
      options: {
        attachTo: '.first-element bottom',
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        showCancelLink: false
      }
    }];

    await visit('/');

    tour.set('defaultStepOptions', defaultStepOptions);
    tour.set('steps', steps);

    await click('.toggleHelpModal');

    assert.notOk(document.querySelector('.shepherd-element a.shepherd-cancel-link'));
  });

  test('Cancel link cancels the tour', async function(assert) {
    await visit('/');

    await click('.toggleHelpModal');

    assert.ok(document.body.classList.contains('shepherd-active'), 'Body has class of shepherd-active, when shepherd becomes active');

    await click(document.querySelector('.shepherd-content a.shepherd-cancel-link'));

    assert.notOk(document.body.classList.contains('shepherd-active'), 'Body does not have class of shepherd-active, when shepherd becomes inactive');
  });

  test('Modal page contents', async function(assert) {
    assert.expect(3);

    await visit('/');

    await click('.toggleHelpModal');

    assert.ok(document.body.classList.contains('shepherd-active'), 'Body gets class of shepherd-active, when shepherd becomes active');
    assert.equal(document.querySelectorAll('.shepherd-enabled').length, 1, 'attachTo element has the shepherd-enabled class');
    assert.ok(document.querySelector('#shepherdOverlay'), '#shepherdOverlay exists, since modal');
  });

  test('Non-modal page contents', async function(assert) {
    assert.expect(3);

    await visit('/');

    await click('.toggleHelpNonmodal');

    assert.ok(document.body.classList.contains('shepherd-active'), 'Body gets class of shepherd-active, when shepherd becomes active');
    assert.equal(document.querySelectorAll('.shepherd-enabled').length, 1, 'attachTo element has the shepherd-enabled class');
    assert.notOk(document.querySelector('#shepherdOverlay'), '#shepherdOverlay should not exist, since non-modal');
  });

  test('Highlight applied', async function(assert) {
    assert.expect(2);

    const steps = [{
      id: 'test-highlight',
      options: {
        attachTo: '.first-element bottom',
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        highlightClass: 'highlight',
        text: ['Testing highlight']
      }
    }];

    await visit('/');

    tour.set('steps', steps);
    tour.set('modal', true);

    await click('.toggleHelpModal');

    assert.ok(document.querySelector('.highlight'), 'currentElement highlighted');

    await click(document.querySelector('.shepherd-content .cancel-button'));

    assert.notOk(document.querySelector('.highlight'), 'highlightClass removed on cancel');
  });

  test('Highlight applied when `tour.modal == false`', async function(assert) {
    assert.expect(2);

    const steps = [{
      id: 'test-highlight',
      options: {
        attachTo: '.first-element bottom',
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        highlightClass: 'highlight',
        text: ['Testing highlight']
      }
    }];

    await visit('/');

    tour.set('steps', steps);

    await click('.toggleHelpNonmodal');

    assert.ok(document.querySelector('.highlight'), 'currentElement highlighted');

    await click(document.querySelector('.shepherd-content .cancel-button'));

    assert.notOk(document.querySelector('.highlight'), 'highlightClass removed on cancel');
  });

  test('Defaults applied', async function(assert) {
    assert.expect(1);

    const stepsWithoutClasses = [
      {
        id: 'test-highlight',
        options: {
          attachTo: '.first-element bottom',
          buttons: [
            builtInButtons.cancel,
            builtInButtons.next
          ]
        }
      }
    ];

    await visit('/');

    tour.set('steps', stepsWithoutClasses);

    await click('.toggleHelpModal');

    assert.ok(document.querySelector('.custom-default-class'), 'defaults class applied');
  });

  test('configuration works with attachTo object when element is a simple string', async function(assert) {
    assert.expect(1);

    const steps = [{
      id: 'test-attachTo-string',
      options: {
        attachTo: {
          element: '.first-element',
          on: 'bottom'
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ]
      }
    }];

    tour.set('steps', steps);

    await visit('/');

    await click('.toggleHelpModal');

    assert.ok(document.querySelector('.shepherd-element'), 'tour is visible');
  });

  test('configuration works with attachTo object when element is dom element', async function(assert) {
    assert.expect(1);

    await visit('/');

    const steps = [{
      id: 'test-attachTo-dom',
      options: {
        attachTo: {
          element: find('.first-element'),
          on: 'bottom'
        },
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ]
      }
    }];

    tour.set('steps', steps);

    await click('.toggleHelpModal');

    assert.ok(document.querySelector('.shepherd-element'), 'tour is visible');
  });

  test('buttons work when type is not specified and passed action is triggered', async function(assert) {
    assert.expect(4);

    let buttonActionCalled = false;

    const steps = [{
      id: 'test-buttons-custom-action',
      options: {
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
        ]
      }
    }];

    await visit('/');

    tour.set('steps', steps);

    await click('.toggleHelpModal');

    assert.ok(document.querySelector('.button-one'), 'tour button one is visible');
    assert.ok(document.querySelector('.button-two'), 'tour button two is visible');
    assert.ok(document.querySelector('.button-three'), 'tour button three is visible');

    await click(document.querySelector('.button-two'));

    assert.ok(buttonActionCalled, 'button action triggered');
  });

  test('`pointer-events` is set to `auto` for any previously disabled `attachTo` targets', async function(assert) {
    const steps = [
      {
        id: 'step-1',
        options: {
          attachTo: '.shepherd-logo-link top',
          buttons: [
            builtInButtons.cancel,
            builtInButtons.next
          ],
          title: 'Controlling Clickability',
          text: 'By default, target elements should have their `pointerEvents` style unchanged'
        }
      },
      {
        id: 'step-2',
        options: {
          attachTo: '.shepherd-logo-link top',
          canClickTarget: false,
          buttons: [
            builtInButtons.cancel
          ],
          title: 'Controlling Clickability',
          text: 'Clickability of target elements can be disabled by setting `canClickTarget` to false'
        }
      }
    ];

    await visit('/');

    tour.set('steps', steps);
    tour.set('modal', true);

    await click('.toggleHelpModal');

    // Get the target element
    const targetElement = document.querySelector('.shepherd-target');

    assert.equal(getComputedStyle(targetElement)['pointer-events'], 'auto');

    // Exit the tour
    await click(document.querySelector('[data-id="step-1"] .next-button'));

    assert.equal(getComputedStyle(targetElement)['pointer-events'], 'none');

    // Exit the tour
    await click(document.querySelector('[data-id="step-2"] .cancel-button'));

    assert.equal(getComputedStyle(targetElement)['pointer-events'], 'auto');
  });

  test('scrollTo works with disableScroll on', async function(assert) {
    assert.expect(2);
    // Setup controller tour settings
    tour.set('disableScroll', true);
    tour.set('scrollTo', true);

    // Visit route
    await visit('/');

    document.querySelector('#ember-testing-container').scrollTop = 0;

    assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');

    await click('.toggleHelpModal');

    await click(document.querySelector('.shepherd-content .next-button'));

    await click(document.querySelector('.shepherd-content .next-button'));

    assert.ok(document.querySelector('#ember-testing-container').scrollTop > 0, 'Scrolled down correctly');
  });

  test('scrollTo works with a custom scrollToHandler', async function(assert) {
    assert.expect(2);
    // Override default behavior
    const steps = [{
      id: 'intro',
      options: {
        attachTo: '.first-element bottom',
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        scrollTo: true,
        scrollToHandler() {
          return document.querySelector('#ember-testing-container').scrollTop = 120;
        }
      }
    }];

    // Visit route
    await visit('/');

    tour.set('steps', steps);

    document.querySelector('#ember-testing-container').scrollTop = 0;
    assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');

    await click('.toggleHelpModal');
    await click(document.querySelector('.shepherd-content .next-button'));

    assert.ok(document.querySelector('#ember-testing-container').scrollTop === 120, 'Scrolled correctly');
  });

  test('scrollTo works without a custom scrollToHandler', async function(assert) {
    assert.expect(2);
    // Setup controller tour settings
    tour.set('scrollTo', true);

    // Visit route
    await visit('/');

    document.querySelector('#ember-testing-container').scrollTop = 0;

    assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');

    await click('.toggleHelpModal');
    await click(document.querySelector('.shepherd-content .next-button'));

    assert.ok(document.querySelector('#ember-testing-container').scrollTop > 0, 'Scrolled correctly');
  });

  test('Shows by id works', async function(assert) {
    await visit('/');

    tour.show('usage');

    assert.equal(document.querySelector('.shepherd-element .shepherd-text').textContent,
      'To use the tour service, simply inject it into your application and use it like this example.',
      'Usage step shown');
  });

  test('copyStyles copies the element correctly', async function(assert) {
    assert.expect(1);

    const steps = [{
      id: 'intro',
      options: {
        attachTo: '.first-element bottom',
        buttons: [
          builtInButtons.cancel,
          builtInButtons.next
        ],
        copyStyles: true
      }
    }];

    await visit('/');

    tour.set('steps', steps);

    await click('.toggleHelpModal');

    assert.equal(document.querySelectorAll('.first-element').length, 2, 'First element is copied with copyStyles');
  });

  test('configuring the modal container works', async function(assert) {
    await visit('/');
    await click('.toggleHelpModal');

    assert.equal(
      document.querySelector('#shepherdOverlay').parentNode.tagName,
      'BODY',
      'modal overlay gets placed in body element by default'
    );
    await click(document.querySelector('.cancel-button'));
    assert.notOk(
      document.querySelector('#shepherdOverlay'),
      'overlay gets cleaned up after closing tour (default location)'
    );

    tour.set('modalContainer', '.test-modal-container');
    await visit('/');
    await click('.toggleHelpModal');

    assert.ok(
      document.querySelector('#shepherdOverlay').parentNode.classList.contains('test-modal-container'),
      'modal overlay gets placed in custom element'
    );
    await click(document.querySelector('.cancel-button'));
    assert.notOk(document.querySelector('#shepherdOverlay'), 'overlay gets cleaned up after closing tour (custom location)');
  });
});
