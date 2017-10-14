import $ from 'jquery';
import { click, visit } from 'ember-native-dom-helpers';
import { test } from 'qunit';
import moduleForAcceptance from '../helpers/module-for-acceptance';

let container,
  tour;

function patchClick(sel, container) {
  find(sel, container)[0].click();
}

moduleForAcceptance('Tour functionality tests', {
  beforeEach() {
    container = this.application.__container__;
    tour = container.lookup('service:tour');
    tour.set('autoStart', false);
    tour.set('modal', false);
  },
  afterEach() {
    // Remove all Shepherd stuff, to start fresh each time.
    find('.shepherd-active', 'body').removeClass('shepherd-active');
    find('[class^=shepherd]', 'body').remove();
    find('[id^=shepherd]', 'body').remove();
    tour.cleanup();
  }
});

test('Shows cancel link', async function(assert) {
  await visit('/');

  await click('.toggleHelpModal');

  const cancelLink = find('.shepherd-cancel-link', 'body');
  assert.ok(cancelLink);
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

  assert.equal(find('.shepherd-open a.shepherd-cancel-link', 'body').length, 0);
});

test('Cancel link cancels the tour', async function(assert) {
  await visit('/');

  await click('.toggleHelpModal');

  assert.equal(find('.shepherd-active', 'html').length, 1, 'Body has class of shepherd-active, when shepherd becomes active');
  patchClick('.shepherd-content a.shepherd-cancel-link', 'body');
  andThen(function() {
    assert.equal(find('.shepherd-active', 'html').length, 0, 'Body does not have class of shepherd-active, when shepherd becomes inactive');
  });
});

test('Modal page contents', async function(assert) {
  assert.expect(3);

  await visit('/');

  await click('.toggleHelpModal');

  assert.equal(find('.shepherd-active', 'html').length, 1, 'Body gets class of shepherd-active, when shepherd becomes active');
  assert.equal(find('.shepherd-enabled', 'body').length, 2, 'attachTo element and tour have shepherd-enabled class');
  assert.equal(find('#shepherdOverlay', 'body').length, 1, '#shepherdOverlay exists, since modal');
});

test('Non-modal page contents', async function(assert) {
  assert.expect(3);

  await visit('/');

  tour.cancel();

  await click('.toggleHelpNonmodal');

  assert.equal(find('body.shepherd-active', 'html').length, 1, 'Body gets class of shepherd-active, when shepherd becomes active');
  assert.equal(find('.shepherd-enabled', 'body').length, 2, 'attachTo element and tour get shepherd-enabled class');
  assert.equal(find('#shepherdOverlay', 'body').length, 0, '#shepherdOverlay should not exist, since non-modal');
});

test('Tour next, back, and cancel builtInButtons work', async function(assert) {
  assert.expect(3);

  await visit('/');

  await click('.toggleHelpModal');

  patchClick('.shepherd-content a:contains(Next)', 'body');
  assert.equal(find('.back-button', '.shepherd-enabled', 'body').length, 1, 'Ensure that the back button appears');
  patchClick('.shepherd-content a:contains(Back)', 'body');
  assert.equal(find('.back-button', '.shepherd-enabled', 'body').length, 0, 'Ensure that the back button disappears');
  patchClick('.shepherd-content a:contains(Exit)', 'body');
  assert.equal(find('[class^=shepherd-button]:visible', 'body').length, 0, 'Ensure that all buttons are gone, after exit');
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

  assert.equal(find('.highlight', 'body').length, 1, 'currentElement highlighted');
  patchClick('.shepherd-content a:contains(Exit)', 'body');
  assert.equal(find('.highlight', 'body').length, 0, 'highlightClass removed on cancel');
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

  assert.equal(find('.highlight', 'body').length, 1, 'currentElement highlighted');
  patchClick('.shepherd-content a:contains(Exit)', 'body');
  assert.equal(find('.highlight', 'body').length, 0, 'highlightClass removed on cancel');
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

  assert.equal(find('.test-defaults', 'body').length, 1, 'defaults class applied');
  patchClick('.shepherd-content a:contains(Exit)', 'body');
});

test('configuration works with attachTo object when element is a simple string', async function(assert) {
  assert.expect(1);

  // Override default behavior
  const steps = [{
    id: 'test-highlight',
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

  assert.ok(find('.shepherd-step', 'body').length, 'tour is visible');
});

test('configuration works with attachTo object when element is dom element', async function(assert) {
  assert.expect(1);

  // Override default behavior
  const steps = [{
    id: 'test-highlight',
    options: {
      attachTo: {
        element: $('.medium-8:first')[0],
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

  assert.ok(find('.shepherd-step', 'body').length, 'tour is visible');
});

test('buttons work when type is not specified and passed action is triggered', async function(assert) {
  assert.expect(4);
  let buttonActionCalled = false;

  const steps = [{
    id: 'test-highlight',
    options: {
      attachTo: {
        element: $('.medium-8:first')[0],
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
          action: () => buttonActionCalled = true
        },
        {
          classes: 'shepherd-button-secondary button-three',
          text: 'button three',
          action: () => {
          }
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

  assert.ok(find('.button-one', 'body').length, 'tour button one is visible');
  assert.ok(find('.button-two', 'body').length, 'tour button two is visible');
  assert.ok(find('.button-three', 'body').length, 'tour button three is visible');
  patchClick('.button-two', 'body');

  andThen(function() {
    assert.ok(buttonActionCalled, 'button action triggered');
  });
});

test('`pointer-events` is set to `auto` for any step element on clean up', async function(assert) {
  assert.expect(4);

  await visit('/');

  await click('.toggleHelpModal');

  // Go through a step of the tour...
  patchClick('.next-button', '[data-id="intro"]');

  // Check the target elements have pointer-events = 'none'
  andThen(() => {
    // Get the 2 shepherd-target's
    find('.shepherd-target').map((key, elem) => {
      assert.equal(elem.style.pointerEvents, 'none');
    });

    // Exit the tour
    patchClick('.cancel-button', '[data-id="installation"]');
  });

  // Check all the target elements now have pointer-events = 'auto'
  andThen(() => {
    // Get the 2 shepherd-target's again
    find('.shepherd-target').map((key, elem) => {
      assert.equal(elem.style.pointerEvents, 'auto');
    });
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

  patchClick('.shepherd-content a:contains(Next)', 'body');
  andThen(() => {
    patchClick('.shepherd-content a:contains(Next)', 'body');
  });
  andThen(() => {
    assert.ok($('#ember-testing-container').scrollTop() > 0, 'Scrolled down correctly');
  });
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

  patchClick('.shepherd-content a:contains(Next)', 'body');
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

  patchClick('.shepherd-content a:contains(Next)', 'body');
  andThen(() => {
    assert.ok($('#ember-testing-container').scrollTop() > 0, 'Scrolled correctly');
  });
});
