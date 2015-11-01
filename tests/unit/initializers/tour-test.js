import Ember from 'ember';
// See comment below about Ember CLI bug
// This should be fixed with the next CLI release
import initializer from '../../../initializers/tour';
import { module, skip } from 'qunit';

var container, application, mockTourService, mockApplicationController;

module('TourInitializer', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      container = application.__container__;
      application.deferReadiness();

      mockTourService = Ember.Object.create({});
      mockApplicationController = Ember.Object.create({});

      application.register('service:tour', mockTourService, {instantiate: false});
      application.register('controller:application', mockApplicationController, {instantiate: false});
    });
  }
});

skip('it injects the application controller into the tour service', function(assert) {
  // NOTE: this is needed due to a bug in the Ember CLI testing of
  // addon-provided initializers.  See link for more details
  // https://github.com/ember-cli/ember-cli/pull/3891
  initializer.initialize(container, application);
  assert.equal(mockTourService.get('applicationController'), mockApplicationController, 'Initializer injects the application controller');
});
