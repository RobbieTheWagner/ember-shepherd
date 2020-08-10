import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { steps as defaultSteps } from '../../data';

export default class DocsDemoController extends Controller {
  @service tour;

  usage = `//Inject the service: tour: Ember.inject.service()
let tour = this.get('tour');
tour.set('defaultStepOptions', shepherdStepDefaults);
tour.set('disableScroll', true);
tour.set('modal', true);
tour.set('requiredElements', requiredElements);
tour.addSteps(steps);

// Methods to control the tour
tour.start();
tour.next();
tour.back();
tour.cancel();`;

  @action
  toggleHelpModal() {
    this.tour.set('modal', true);
    this.tour.addSteps(defaultSteps);
    this.tour.start();
  }

  @action
  toggleHelpNonmodal() {
    this.tour.set('modal', false);
    this.tour.addSteps(defaultSteps);
    this.tour.start();
  }
}
