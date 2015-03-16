import Ember from 'ember';

export default Ember.Controller.extend({
  showHelp: false,
  actions: {
    toggleHelp: function() {
      this.toggleProperty('showHelp');
    }
  }
});
