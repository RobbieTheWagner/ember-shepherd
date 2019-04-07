/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
import Route from '@ember/routing/route';
import config from '../../config/environment';
import { inject as service } from '@ember/service';
import { scheduleOnce } from '@ember/runloop';
import { steps as defaultSteps, defaultStepOptions} from '../../data';

export default Route.extend({
  tour: service(),
  disableScroll: true,

  beforeModel() {
    const tour = this.get('tour');

    tour.set('defaultStepOptions', defaultStepOptions);
    tour.set('disableScroll', this.get('disableScroll'));
    tour.set('modal', true);
    tour.set('confirmCancel', false);

    // Disable animations in the test environment, to ensure timing is correct
    if (config.environment === 'test') {
      tour.set('defaultStepOptions.tippyOptions', {
        delay: 0,
        duration: 0
      });
    }

    tour.addSteps(defaultSteps);

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
      scheduleOnce('afterRender', this, function() {
        this.get('tour').start();
      });
    }
  }
});
