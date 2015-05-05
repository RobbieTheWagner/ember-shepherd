import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  start: false,

  requiredElements: null,
  steps: Ember.A([])
});
