import Ember from 'ember';

export default Ember.Mixin.create({
  onboard: Ember.inject.service(),

  cancelActiveTour: Ember.on('willTransition', function() {
    this.get('onboard').cancelTour();
  })
});
