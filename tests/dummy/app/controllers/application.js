import Ember from 'ember';

export default Ember.Controller.extend({
  tour: Ember.inject.service(),

  actions: {
    toggleHelpModal() {
      this.get('tour').set('modal', true);
      this.get('tour').start();
    },
    toggleHelpNonmodal() {
      this.get('tour').set('modal', false);
      this.get('tour').start();
    }
  }
});
