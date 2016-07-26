import Ember from 'ember';
const {Controller, inject} = Ember;

export default Controller.extend({
  tour: inject.service(),

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
