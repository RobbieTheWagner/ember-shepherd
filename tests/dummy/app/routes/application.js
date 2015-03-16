import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var tour = new Shepherd.Tour({
      defaults: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true
      }
    });

    var steps = [
      {
        name: 'test',
        options: {
          text: 'Testing step',
          attachTo: '.test-element bottom',
          buttons: [
            {
              text: 'Next',
              action: function() {
                controller.set('next', true);
              }.bind(this)
            }
          ]
        }
      },
      {
        name: 'test2',
        options: {
          text: 'Testing step 2',
          attachTo: '.test-element2 bottom',
          buttons: [
            {
              text: 'Previous',
              action: function() {
                controller.set('back', true);
              }.bind(this)
            },
            {
              text: 'Next',
              action: function() {
                controller.set('next', true);
              }.bind(this)
            }
          ]
        }
      }
    ];
    steps.forEach(function(step) {
      tour.addStep(step.name, step.options);
    });
    controller.set('tour', tour);
  }
});
