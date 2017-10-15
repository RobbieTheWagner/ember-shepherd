import { click, find, findAll, visit } from 'ember-native-dom-helpers';
import $ from 'jquery';
import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';
import steps from '../data';

let container, tour;

moduleForAcceptance('Tour functionality tests', {
  beforeEach() {
    container = this.application.__container__;
    tour = container.lookup('service:tour');
    tour.setProperties({
      steps,
      autostart: false,
      modal: false,
      defaults: {
        classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
        scrollTo: true,
        showCancelLink: true
      }
    });
  },
  afterEach() {
    // Remove all Shepherd stuff, to start fresh each time.
    document.body.classList.remove('shepherd-active');
    findAll('[class^=shepherd]', document.documentElement).forEach((el) => {
      el.parentNode.removeChild(el);
    });
    findAll('[id^=shepherd]', document.documentElement).forEach((el) => {
      el.parentNode.removeChild(el);
    });
    tour.cleanup();
  }
});

test('Shows cancel link', async function(assert) {
  await visit('/');

  await click('.toggleHelpModal');

  const cancelLink = find('.shepherd-cancel-link', document.documentElement);
  assert.ok(cancelLink, 'Cancel link shown');
});

test('Hides cancel link', async function(assert) {
  const defaults = {
    classes: 'shepherd-element shepherd-open shepherd-theme-arrows test-defaults',
    showCancelLink: false
  };

  const steps = [{
    id: 'test-highlight',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      showCancelLink: false,
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing highlight']
    }
  }];

  await visit('/');

  tour.cancel();
  tour.set('defaults', defaults);
  tour.set('steps', steps);
  tour.set('autoStart', false);

  await click('.toggleHelpModal');

  assert.notOk(find('.shepherd-open a.shepherd-cancel-link', document.documentElement));
});

test('Cancel link cancels the tour', async function(assert) {
  await visit('/');

  await click('.toggleHelpModal');

  assert.ok(document.body.classList.contains('shepherd-active'), 'Body has class of shepherd-active, when shepherd becomes active');

  await click('.shepherd-content a.shepherd-cancel-link', document.documentElement);

  assert.notOk(document.body.classList.contains('shepherd-active'), 'Body does not have class of shepherd-active, when shepherd becomes inactive');
});

test('Modal page contents', async function(assert) {
  assert.expect(3);

  await visit('/');

  await click('.toggleHelpModal');

  assert.ok(document.body.classList.contains('shepherd-active'), 'Body gets class of shepherd-active, when shepherd becomes active');
  assert.equal(findAll('.shepherd-enabled', document.documentElement).length, 2, 'attachTo element and tour have shepherd-enabled class');
  assert.ok(find('#shepherdOverlay', document.documentElement), '#shepherdOverlay exists, since modal');
});

test('Non-modal page contents', async function(assert) {
  assert.expect(3);

  await visit('/');

  tour.cancel();

  await click('.toggleHelpNonmodal');

  assert.ok(document.body.classList.contains('shepherd-active'), 'Body gets class of shepherd-active, when shepherd becomes active');
  assert.equal(findAll('.shepherd-enabled', document.documentElement).length, 2, 'attachTo element and tour get shepherd-enabled class');
  assert.notOk(find('#shepherdOverlay', document.documentElement), '#shepherdOverlay should not exist, since non-modal');
});

test('Tour next, back, and cancel builtInButtons work', async function(assert) {
  assert.expect(3);

  await visit('/');

  await click('.toggleHelpModal');
  await click('.shepherd-content .next-button', document.documentElement);

  assert.ok(find('.shepherd-enabled .back-button', document.documentElement), 'Ensure that the back button appears');

  await click('.shepherd-content .back-button', document.documentElement);

  assert.notOk(find('.shepherd-enabled .back-button', document.documentElement), 'Ensure that the back button disappears');

  await click('.shepherd-content .cancel-button', document.documentElement);

  assert.notOk(find('.shepherd-enabled [class^=shepherd-button]', document.documentElement), 'Ensure that all buttons are gone, after exit');
});

test('Highlight applied', async function(assert) {
  assert.expect(2);

  const steps = [{
    id: 'test-highlight',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing highlight']
    }
  }];

  await visit('/');

  tour.set('steps', steps);
  tour.set('modal', true);

  await click('.toggleHelpModal');

  assert.ok(find('.highlight', document.documentElement), 'currentElement highlighted');

  await click('.shepherd-content .cancel-button', document.documentElement);

  assert.notOk(find('.highlight', document.documentElement), 'highlightClass removed on cancel');
});

test('Highlight applied when `tour.modal == false`', async function(assert) {
  assert.expect(2);

  const steps = [{
    id: 'test-highlight',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing highlight']
    }
  }];

  await visit('/');

  tour.set('steps', steps);

  await click('.toggleHelpNonmodal');

  assert.ok(find('.highlight', document.documentElement), 'currentElement highlighted');

  await click('.shepherd-content .cancel-button', document.documentElement);

  assert.notOk(find('.highlight', document.documentElement), 'highlightClass removed on cancel');
});

test('Defaults applied', async function(assert) {
  assert.expect(1);

  const defaults = {
    classes: 'shepherd-element shepherd-open shepherd-theme-arrows test-defaults',
    scrollTo: false,
    showCancelLink: true
  };

  const steps = [{
    id: 'test-defaults-classes',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing defaults']
    }
  }];

  await visit('/');

  tour.set('defaults', defaults);
  tour.set('steps', steps);

  await click('.toggleHelpModal');

  assert.ok(find('.test-defaults', document.documentElement), 'defaults class applied');
});

test('configuration works with attachTo object when element is a simple string', async function(assert) {
  assert.expect(1);

  // Override default behavior
  const steps = [{
    id: 'test-attachTo-string',
    options: {
      attachTo: {
        element: '.first-element',
        on: 'bottom'
      },
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing highlight']
    }
  }];

  tour.set('steps', steps);

  await visit('/');

  await click('.toggleHelpModal');

  assert.ok(find('.shepherd-step', document.documentElement), 'tour is visible');
});

test('configuration works with attachTo object when element is dom element', async function(assert) {
  assert.expect(1);

  await visit('/');

  // Override default behavior
  const steps = [{
    id: 'test-attachTo-dom',
    options: {
      attachTo: {
        element: find('.first-element'),
        on: 'bottom'
      },
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing highlight']
    }
  }];

  tour.set('steps', steps);

  await click('.toggleHelpModal');

  assert.ok(find('.shepherd-step', document.documentElement), 'tour is visible');
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
      builtInButtons: [
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
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing highlight']
    }
  }];

  await visit('/');

  tour.set('steps', steps);

  await click('.toggleHelpModal');

  assert.ok(find('.button-one', document.body), 'tour button one is visible');
  assert.ok(find('.button-two', document.body), 'tour button two is visible');
  assert.ok(find('.button-three', document.body), 'tour button three is visible');

  await click(find('.button-two', document.body));

  assert.ok(buttonActionCalled, 'button action triggered');
});

test('`pointer-events` is set to `auto` for any step element on clean up', async function(assert) {
  assert.expect(4);

  await visit('/');

  await click('.toggleHelpModal');

  // Go through a step of the tour...
  await click('[data-id="intro"] .next-button', document.documentElement);

  // Check the target elements have pointer-events = 'none'
  // Get the 2 shepherd-target's
  findAll('.shepherd-target', document.documentElement).map((elem) => {
    assert.equal(elem.style.pointerEvents, 'none');
  });

  // Exit the tour
  await click('[data-id="installation"] .cancel-button', document.documentElement);

  // Check all the target elements now have pointer-events = 'auto'
  // Get the 2 shepherd-target's again
  findAll('.shepherd-target', document.documentElement).map((elem) => {
    assert.equal(elem.style.pointerEvents, 'auto');
  });
});

test('scrollTo works with disableScroll on', async function(assert) {
  assert.expect(2);
  // Setup controller tour settings
  tour.set('disableScroll', true);
  tour.set('scrollTo', true);

  // Visit route
  await visit('/');

  $('#ember-testing-container').scrollTop(0);

  assert.equal($('#ember-testing-container').scrollTop(), 0, 'Scroll is initially 0');

  await click('.toggleHelpModal');

  await click('.shepherd-content .next-button', document.documentElement);

  await click('.shepherd-content .next-button', document.documentElement);

  assert.ok($('#ember-testing-container').scrollTop() > 0, 'Scrolled down correctly');
});

test('scrollTo works with a custom scrollToHandler', async function(assert) {
  assert.expect(2);
  // Override default behavior
  const steps = [{
    id: 'intro',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      title: 'Welcome to Ember Shepherd!',
      text: ['A field that has rested gives a bountiful crop.'],
      scrollTo: true,
      scrollToHandler() {
        return $('#ember-testing-container').scrollTop(120);
      }
    }
  }];

  // Visit route
  await visit('/');

  tour.set('steps', steps);

  $('#ember-testing-container').scrollTop(0);
  assert.equal($('#ember-testing-container').scrollTop(), 0, 'Scroll is initially 0');

  await click('.toggleHelpModal');
  await click('.shepherd-content .next-button', document.documentElement);

  assert.ok($('#ember-testing-container').scrollTop() === 120, 'Scrolled correctly');
});

test('scrollTo works without a custom scrollToHandler', async function(assert) {
  assert.expect(2);
  // Setup controller tour settings
  tour.set('scrollTo', true);

  // Visit route
  await visit('/');

  $('#ember-testing-container').scrollTop(0);

  assert.equal($('#ember-testing-container').scrollTop(), 0, 'Scroll is initially 0');

  await click('.toggleHelpModal');
  await click('.shepherd-content .next-button', document.documentElement);

  assert.ok($('#ember-testing-container').scrollTop() > 0, 'Scrolled correctly');
});

test('Shows by id works', async function(assert) {
  await visit('/');

  tour.show('usage');

  assert.equal(find('.shepherd-enabled.shepherd-open .shepherd-text', document.documentElement).textContent,
    'To use the tour service, simply inject it into your application and use it like this example.',
    'Usage step shown');
});

test('copyStyles copies the element correctly', async function(assert) {
  assert.expect(1);

  const steps = [{
    id: 'intro',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: true,
      title: 'Welcome to Ember Shepherd!',
      text: ['A field that has rested gives a bountiful crop.'],
      scrollTo: false
    }
  }];

  await visit('/');

  tour.set('steps', steps);

  await click('.toggleHelpModal');

  assert.equal(findAll('.first-element', document.documentElement).length, 2, 'First element is copied with copyStyles');
});
