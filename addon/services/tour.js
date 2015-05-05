import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  requiredElements: null,
  steps: Ember.A([])
});
