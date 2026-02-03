import Route from '@ember/routing/route';
import config from '../../config/environment';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { steps as defaultSteps, defaultStepOptions } from '../../data';

export default class DocsDemoRoute extends Route {
  @service tour;

  disableScroll = false;

  async beforeModel() {
    const tour = this.tour;

    tour.set('defaultStepOptions', defaultStepOptions);
    tour.set('disableScroll', this.disableScroll);
    tour.set('modal', true);
    tour.set('confirmCancel', false);

    await tour.addSteps(defaultSteps);

    tour.on('cancel', () => {
      console.log('cancel');
    });
  }

  model() {
    return {
      links: [
        {
          href: 'https://github.com/RobbieTheWagner/ember-shepherd',
          text: 'Docs',
          type: 'href',
        },
        {
          href: 'https://github.com/RobbieTheWagner/ember-shepherd',
          text: 'GitHub',
          type: 'href',
        },
        {
          href: 'https://shipshape.io',
          text: 'Ship Shape',
          type: 'href',
        },
      ],
    };
  }

  activate() {
    if (config.environment !== 'test') {
      // eslint-disable-next-line ember/no-runloop
      scheduleOnce('afterRender', this, this._startTour);
    }
  }

  _startTour() {
    this.tour.start();
  }
}
