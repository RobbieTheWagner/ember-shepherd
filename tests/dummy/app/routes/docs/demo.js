/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Route from '@ember/routing/route';
import config from '../../config/environment';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { steps as defaultSteps, defaultStepOptions } from '../../data';

export default Route.extend({
  tour: service(),
  disableScroll: false,

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
  },

  model() {
    return {
      links: [
        {
          href: 'https://github.com/shipshapecode/ember-shepherd',
          text: 'Docs',
          type: 'href'
        },
        {
          href: 'https://github.com/shipshapecode/ember-shepherd',
          text: 'GitHub',
          type: 'href'
        },
        {
          href: 'https://shipshape.io',
          text: 'Ship Shape',
          type: 'href'
        }
      ]
    };
  },

  activate() {
    if (config.environment !== 'test') {
      scheduleOnce('afterRender', this, this._startTour);
    }
  },

  _startTour() {
    this.tour.start();
  }
});
