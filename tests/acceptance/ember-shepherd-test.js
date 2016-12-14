import $ from 'jquery';
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

test('Shows cancel link', function(assert) {
  visit('/');
  click('.toggleHelpModal');
  andThen(() => {
    let cancelLink = find('.shepherd-cancel-link', 'body');
    assert.ok(cancelLink);
  });
});

test('Hides cancel link', function(assert) {
  let defaults = {
    classes: 'shepherd-element shepherd-open shepherd-theme-arrows test-defaults',
    showCancelLink: false
  };

  let steps = [{
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

  visit('/');

  andThen(() => {
    tour.set('defaults', defaults);
    tour.set('steps', steps);
    click('.toggleHelpModal');
    andThen(() => {
      assert.equal(find('.shepherd-cancel-link', 'body').length, 0);
    });
  });
});

test('Cancel link cancels the tour', function(assert) {
  visit('/');
  click('.toggleHelpModal');

  andThen(() => {
    assert.equal(find('.shepherd-active', 'html').length, 1, 'Body has class of shepherd-active, when shepherd becomes active');
    click('a.shepherd-cancel-link', 'body');
    andThen(function() {
      assert.equal(find('.shepherd-active', 'html').length, 0, 'Body does not have class of shepherd-active, when shepherd becomes inactive');
    });
  });
});

test('Modal page contents', function(assert) {
  assert.expect(3);

  visit('/');

  click('.toggleHelpModal');

  andThen(function() {
    assert.equal(find('.shepherd-active', 'html').length, 1, 'Body gets class of shepherd-active, when shepherd becomes active');
    assert.equal(find('.shepherd-enabled', 'body').length, 2, 'attachTo element and tour have shepherd-enabled class');
    assert.equal(find('#shepherdOverlay', 'body').length, 1, '#shepherdOverlay exists, since modal');
  });
});

test('Non-modal page contents', function(assert) {
  assert.expect(3);

  visit('/');
  andThen(function() {
    tour.cancel();

    click('.toggleHelpNonmodal');

    andThen(() => {
      assert.equal(find('body.shepherd-active', 'html').length, 1, 'Body gets class of shepherd-active, when shepherd becomes active');
      assert.equal(find('.shepherd-enabled', 'body').length, 2, 'attachTo element and tour get shepherd-enabled class');
      assert.equal(find('#shepherdOverlay', 'body').length, 0, '#shepherdOverlay should not exist, since non-modal');
    });
  });
});

test('Tour next, back, and cancel builtInButtons work', function(assert) {
  assert.expect(3);

  visit('/');

  click('.toggleHelpModal');

  andThen(function() {
    patchClick('.shepherd-content a:contains(Next)', 'body');
    assert.equal(find('.back-button', '.shepherd-enabled', 'body').length, 1, 'Ensure that the back button appears');
    patchClick('.shepherd-content a:contains(Back)', 'body');
    assert.equal(find('.back-button', '.shepherd-enabled', 'body').length, 0, 'Ensure that the back button disappears');
    patchClick('.shepherd-content a:contains(Exit)', 'body');
    assert.equal(find('[class^=shepherd-button]:visible', 'body').length, 0, 'Ensure that all buttons are gone, after exit');
  });
});

test('Highlight applied', function(assert) {
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

  visit('/');

  andThen(function() {
    tour.set('steps', steps);
    tour.set('modal', true);
    click('.toggleHelpModal');

    andThen(function() {
      assert.equal(find('.highlight', 'body').length, 1, 'currentElement highlighted');
      patchClick('.shepherd-content a:contains(Exit)', 'body');
      assert.equal(find('.highlight', 'body').length, 0, 'highlightClass removed on cancel');
    });
  });
});

test('Defaults applied', function(assert) {
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

  visit('/');
  andThen(function() {
    tour.set('defaults', defaults);
    tour.set('steps', steps);
    click('.toggleHelpModal');

    andThen(function() {
      assert.equal(find('.test-defaults', 'body').length, 1, 'defaults class applied');
      patchClick('.shepherd-content a:contains(Exit)', 'body');
    });
  });
});

test('configuration works with attachTo object when element is a simple string', function(assert) {
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

  visit('/');
  click('.toggleHelpModal');
  andThen(function() {
    assert.ok(find('.shepherd-step', 'body').length, 'tour is visible');
  });
});

test('configuration works with attachTo object when element is dom element', function(assert) {
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

  visit('/');
  click('.toggleHelpModal');
  andThen(function() {
    assert.ok(find('.shepherd-step', 'body').length, 'tour is visible');
  });
});

test('buttons work when type is not specified and passed action is triggered', function(assert) {
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

  visit('/');

  andThen(function() {
    tour.set('steps', steps);

    click('.toggleHelpModal');

    andThen(function() {
      assert.ok(find('.button-one', 'body').length, 'tour button one is visible');
      assert.ok(find('.button-two', 'body').length, 'tour button two is visible');
      assert.ok(find('.button-three', 'body').length, 'tour button three is visible');
      patchClick('.button-two', 'body');
    });

    andThen(function() {
      assert.ok(buttonActionCalled, 'button action triggered');
    });
  });
});

test('`pointer-events` is set to `auto` for any step element on clean up', function(assert) {
  assert.expect(4);
  visit('/');

  click('.toggleHelpModal');

  // Go through a step of the tour...
  andThen(() => {
    patchClick('.next-button', '[data-id="intro"]');
  });

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

test('scrollTo works with disableScroll on', (assert) => {
  assert.expect(2);
  // Setup controller tour settings
  tour.set('disableScroll', true);
  tour.set('scrollTo', true);

  // Visit route
  visit('/');

  $('#ember-testing-container').scrollTop(0);

  assert.equal($('#ember-testing-container').scrollTop(), 0, 'Scroll is initially 0');

  click('.toggleHelpModal');

  andThen(() => {
    patchClick('.shepherd-content a:contains(Next)', 'body');
    andThen(() => {
      patchClick('.shepherd-content a:contains(Next)', 'body');
    });
    andThen(() => {
      assert.ok($('#ember-testing-container').scrollTop() > 0, 'Scrolled down correctly');
    });
  });
});

test('scrollTo works with a custom scrollToHandler', (assert) => {
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
  visit('/');

  andThen(function() {
    tour.set('steps', steps);

    $('#ember-testing-container').scrollTop(0);
    assert.equal($('#ember-testing-container').scrollTop(), 0, 'Scroll is initially 0');

    click('.toggleHelpModal');

    andThen(() => {
      patchClick('.shepherd-content a:contains(Next)', 'body');
      assert.ok($('#ember-testing-container').scrollTop() === 120, 'Scrolled correctly');
    });
  });
});

test('scrollTo works without a custom scrollToHandler', (assert) => {
  assert.expect(2);
  // Setup controller tour settings
  tour.set('scrollTo', true);

  // Visit route
  visit('/');

  $('#ember-testing-container').scrollTop(0);

  assert.equal($('#ember-testing-container').scrollTop(), 0, 'Scroll is initially 0');

  click('.toggleHelpModal');

  andThen(() => {
    patchClick('.shepherd-content a:contains(Next)', 'body');
    andThen(() => {
      assert.ok($('#ember-testing-container').scrollTop() > 0, 'Scrolled correctly');
    });
  });
});
