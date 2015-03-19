import Ember from 'ember';

export default Ember.Controller.extend({
  isModal: true,
  showHelp: false,
  actions: {
    toggleHelpModal: function() {
      this.set('isModal', true);
      this.toggleProperty('showHelp');
    },
    toggleHelpNonmodal: function() {
      this.set('isModal', false);
      this.toggleProperty('showHelp');
    }
  }
});
