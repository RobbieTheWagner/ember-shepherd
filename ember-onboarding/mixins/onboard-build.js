/* globals Shepherd */
import Ember from 'ember';

export default Ember.Mixin.create({

  findTour: function (tourName) {
    return  this.get('onboard.tours').filterBy('name', tourName)[0];
  },

  findStep: function (stepName) {
    return this.get('onboard.steps').filterBy('name', stepName)[0];
  },

  startPresentation: function () {
    var tourObj = this.findTour(this.get('onboard.activeTour'));
    var stepNames = tourObj.steps;
    var stepCount = stepNames.length;
    var tour = new Shepherd.Tour({
      defaults: tourObj.options
    });

    var component = this;
    stepNames.forEach(function(stepName, index) {
      var step = component.findStep(stepName);
      tour.addStep(stepName, component.stepOptions(tour, step, index, stepCount));
    });

    return tour;
  },

  stepOptions: function (tour, step, index, stepCount) {
    var options = step.options;
    return Ember.merge(options,
      this.callButtonFunction(tour, step.buttonFunction, index, stepCount));
  }
});
