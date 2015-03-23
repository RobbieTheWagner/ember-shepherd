/* globals controller */
import Ember from "ember";
import $ from 'jquery';
import { module, test } from 'qunit';
import startApp from '../helpers/start-app';
import '../helpers/controller';
var App;

module('Tour functionality tests', {
  beforeEach: function() {
    App = startApp();
  },
  afterEach: function() {
    //Remove all Shepherd stuff, to start fresh each time.
    $('.shepherd-active').removeClass('shepherd-active');
    $('[class^=shepherd]').remove();
    Ember.run(App, App.destroy);
  }
});

//Had to use dispatchEvent hackery because .click() and .trigger() both will not work
var clickEvent = document.createEvent("MouseEvents");
clickEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

test("Modal page contents", function(assert) {
  assert.expect(3);
  visit('/').then(function() {
    assert.equal(find('body.shepherd-active', 'html').length, 1, "Body gets class of shepherd-active, when shepherd becomes active");
    assert.equal(find('.shepherd-enabled', 'body').length, 2, "attachTo element and tour have shepherd-enabled class");
    assert.equal(find('#shepherdOverlay', 'body').length, 1, "#shepherdOverlay exists, since modal");
  });
});

test("Non-modal page contents", function(assert) {
  var appController = controller('application');
  appController.set('isModal', false);
  assert.expect(3);
  visit('/').then(function() {
    assert.equal(find('body.shepherd-active', 'html').length, 1, "Body gets class of shepherd-active, when shepherd becomes active");
    assert.equal(find('.shepherd-enabled', 'body').length, 2, "attachTo element and tour get shepherd-enabled class");
    assert.equal(find('#shepherdOverlay', 'body').length, 0, "#shepherdOverlay should not exist, since non-modal");
  });
});

test("Tour next, back, and cancel builtInButtons work", function(assert) {
  assert.expect(6);
  visit('/').then(function() {
    assert.equal(find('body.shepherd-active', 'html').length, 1, "Body gets class of shepherd-active, when shepherd becomes active");
    assert.equal(find('.shepherd-enabled', 'body').length, 2, "attachTo element and tour have shepherd-enabled class");
    assert.equal(find('#shepherdOverlay', 'body').length, 1, "#shepherdOverlay exists, since modal");
    $('.shepherd-enabled .next-button')[0].dispatchEvent(clickEvent);
    assert.equal(find('.back-button', '.shepherd-enabled').length, 1, "Ensure that the back button appears");
    $('.shepherd-enabled .back-button')[0].dispatchEvent(clickEvent);
    assert.equal($('.back-button', '.shepherd-enabled').length, 0, "Ensure that the back button disappears");
    $('.shepherd-enabled .cancel-button')[0].dispatchEvent(clickEvent);
    assert.equal($('[class^=shepherd-button]:visible').length, 0, "Ensure that all buttons are gone, after exit");
  });
});
