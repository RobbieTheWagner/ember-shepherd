import Ember from 'ember';
import layout from '../templates/components/onboard-sticky';

export default Ember.Component.extend({
  layout: layout,

  onboard: Ember.inject.service(),
  isOpen: Ember.computed.alias('onboard.isStickyOpen'),

  actions: {
    toggleOpen: function () {
      this.toggleProperty('isOpen');
    }
  }
});
