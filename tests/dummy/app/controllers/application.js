import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { steps as defaultSteps } from '../data';

export default Controller.extend({
  tour: service(),

  actions: {
    toggleHelpModal() {
      this.get('tour').set('modal', true);
      this.get('tour').addSteps(defaultSteps);
      this.get('tour').start();
    },
    toggleHelpNonmodal() {
      this.get('tour').set('modal', false);
      this.get('tour').addSteps(defaultSteps);
      this.get('tour').start();
    }
  }
});
