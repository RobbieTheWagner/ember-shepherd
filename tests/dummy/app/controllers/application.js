import Ember from 'ember';

export default Ember.Controller.extend({

  tour: Ember.inject.service(),

  actions: {
    toggleHelpModal: function() {
      this.get('tour').set('modal', true);
      this.get('tour').trigger('start');
    },
    toggleHelpNonmodal: function() {
      this.get('tour').set('modal', false);
      this.get('tour').trigger('start');
    }
  }
});
