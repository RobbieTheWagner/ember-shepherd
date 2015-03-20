// tests/helpers/controller.js
import Ember from 'ember';

Ember.Test.registerHelper('controller', function (app, name) {
  return app.__container__.lookup('controller:' + name);
});
