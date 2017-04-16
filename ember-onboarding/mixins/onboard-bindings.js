import Ember from 'ember';

export default Ember.Mixin.create({
  setupBindings: function (tour) {
    var component = this;
    tour.on('complete', function() {
      Ember.run(function () {
        component.destroyTour();
      });
    });

    tour.on('cancel', function() {
      Ember.run(function () {
        component.destroyTour();
      });
    });
  },

  destroyTour: function () {
    var tour = this.get('onboard.tourObj');
    tour.steps.forEach(function (step) {
      step.destroy();
    });

    // is it already unbinded???
    //Ember.run(function () {
    //  delete tour.bindings["cancel"];
    //  delete tour.bindings["complete"];
    //});

    this.set('onboard.activeTour', null);
    this.set('onboard.tourObj', undefined);
  }
});
