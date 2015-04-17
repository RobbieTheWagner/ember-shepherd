import Ember from 'ember';
import layout from '../templates/components/onboard-outlet';
import TourBuild from '../mixins/onboard-build';
import TourBind from '../mixins/onboard-bindings';
import TourButtons from '../mixins/onboard-buttons';

export default Ember.Component.extend(TourBuild, TourBind, TourButtons, {
  layout: layout,

  onboard: Ember.inject.service(),

  observeActiveTour: Ember.on('init', Ember.observer('onboard.activeTour', function () {
    if (this.get('onboard.activeTour')) {
      Ember.run.scheduleOnce('afterRender', this, this.startShepherd);
    }
  })),

  startShepherd: function () {
    var tour = this.startPresentation();

    this.get('onboard').cancelTour();
    this.set('onboard.tourObj', tour);
    this.setupBindings(tour);

    tour.start();
  }
});

