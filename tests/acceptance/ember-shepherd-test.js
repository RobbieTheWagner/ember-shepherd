import Ember from "ember";
import $ from 'jquery';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';

var App, container;

function patchClick(sel, container) {
  find(sel, container)[0].click();
}

module('Tour functionality tests', {
  beforeEach: function() {
    App = startApp();
    container = App.__container__;
  },
  afterEach: function() {
    //Remove all Shepherd stuff, to start fresh each time.
    find('.shepherd-active', 'body').removeClass('ashepherd-active');
    find('[class^=shepherd]', 'body').remove();
    find('#shepherdOverlay', 'body').remove();
    Ember.run(App, App.destroy);
  }
});


test("Modal page contents", function(assert) {
  assert.expect(3);
  visit('/');

  click(':contains(Modal Demo)');
  andThen(function() {
    assert.equal(find('.shepherd-active', 'html').length, 1, "Body gets class of shepherd-active, when shepherd becomes active");
    assert.equal(find('.shepherd-enabled', 'body').length, 2, "attachTo element and tour have shepherd-enabled class");
    assert.equal(find('#shepherdOverlay', 'body').length, 1, "#shepherdOverlay exists, since modal");
  });
});

test("Non-modal page contents", function(assert) {
  assert.expect(3);

  visit('/');
  click(':contains(Non-modal)');
  andThen(function() {
    assert.equal(find('body.shepherd-active', 'html').length, 1, "Body gets class of shepherd-active, when shepherd becomes active");
    assert.equal(find('.shepherd-enabled', 'body').length, 2, "attachTo element and tour get shepherd-enabled class");
    assert.equal(find('#shepherdOverlay', 'body').length, 0, "#shepherdOverlay should not exist, since non-modal");
  });
});

test("Tour next, back, and cancel builtInButtons work", function(assert) {
  assert.expect(3);
  visit('/');
  click(':contains(Modal Demo)');
  andThen(function() {
    patchClick('.shepherd-content a:contains(Next)', 'body');
    assert.equal(find('.back-button', '.shepherd-enabled', 'body').length, 1, "Ensure that the back button appears");
    patchClick('.shepherd-content a:contains(Back)', 'body');
    assert.equal(find('.back-button', '.shepherd-enabled', 'body').length, 0, "Ensure that the back button disappears");
    patchClick('.shepherd-content a:contains(Exit)', 'body');
    assert.equal(find('[class^=shepherd-button]:visible', 'body').length, 0, "Ensure that all buttons are gone, after exit");
  });
});

test("Highlight applied", function(assert) {
  assert.expect(2);

  var steps = [{
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

  container.lookup('route:application').set('initialSteps', steps);

  visit('/');
  click(':contains(Modal Demo)');

  andThen(function() {
    assert.equal(find('.highlight', 'body').length, 1, "currentElement highlighted");
    patchClick('.shepherd-content a:contains(Exit)', 'body');
    assert.equal(find('.highlight', 'body').length, 0, "highlightClass removed on cancel");
  });
});

test('configuration works with attachTo object when element is a simple string', function(assert) {
  assert.expect(1);

  // Override default behavior
  var steps = [{
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
  container.lookup('route:application').set('initialSteps', steps);

  visit('/');
  click(':contains(Modal Demo)');
  andThen(function() {
    assert.ok(find('.shepherd-step', 'body').length, "tour is visible");
  });
});

test('configuration works with attachTo object when element is a string with pseudoselector', function(assert) {
  assert.expect(1);

  // Override default behavior
  var steps = [{
    id: 'test-highlight',
    options: {
      attachTo: {
        element: '.medium-8:first',
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
  container.lookup('route:application').set('initialSteps', steps);

  visit('/');
  click(':contains(Modal Demo)');
  andThen(function() {
    assert.ok(find('.shepherd-step', 'body').length, "tour is visible");
  });
});


test('buttons work when type is not specified and passed action is triggered', function(assert) {
  assert.expect(4);
  var buttonActionCalled = false;

  var steps = [{
    id: 'test-highlight',
    options: {
      attachTo: {
        element: '.medium-8:first',
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
          action: () => {}
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Testing highlight']
    }
  }];

  container.lookup('route:application').set('initialSteps', steps);

  visit('/');
  click(':contains(Modal Demo)');
  andThen(function() {
    assert.ok(find('.button-one', 'body').length, "tour button one is visible");
    assert.ok(find('.button-two', 'body').length, "tour button two is visible");
    assert.ok(find('.button-three', 'body').length, "tour button three is visible");
    patchClick('.button-two', 'body');
  });

  andThen(function() {
    assert.ok(buttonActionCalled, 'button action triggered');
  });

});


