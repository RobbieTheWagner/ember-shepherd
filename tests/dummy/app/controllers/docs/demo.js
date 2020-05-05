import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { steps as defaultSteps } from '../../data';

export default Controller.extend({
  tour: service(),

  actions: {
    toggleHelpModal() {
      this.tour.set('modal', true);
      this.tour.addSteps(defaultSteps);
      this.tour.start();
    },
    toggleHelpNonmodal() {
      this.tour.set('modal', false);
      this.tour.addSteps(defaultSteps);
      this.tour.start();
    }
  }
});
