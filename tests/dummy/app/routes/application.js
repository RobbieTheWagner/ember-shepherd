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
              action: tour.next
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
              action: tour.back
            },
            {
              text: 'Next',
              action: tour.next
            }
          ]
        }
      }
    ];
    controller.set('tour', tour);
    controller.set('steps', steps);
  }
});
