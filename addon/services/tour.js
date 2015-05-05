import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {

  // Configuration Options
  start: false,
  defaults: {},
  requiredElements: Ember.A([]),
  steps: Ember.A([]),

  // Save the raw Tour object
  _tourObject: null

});
