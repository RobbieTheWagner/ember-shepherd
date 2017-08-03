import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  tour: service(),

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
