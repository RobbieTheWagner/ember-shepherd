import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var steps = [
      {
        id: 'test',
        options: {
          text: 'Testing step',
          attachTo: '.test-element bottom',
          builtInButtons: [
            {
              text: 'Next',
              type: 'next'
            }
          ],
          showCancelLink: true,
          copyStyles: false
        }
      },
      {
        id: 'test2',
        options: {
          text: 'Testing step 2',
          attachTo: '.test-element2 bottom',
          builtInButtons: [
            {
              text: 'Previous',
              type: 'back'
            },
            {
              text: 'Next',
              type: 'next'
            }
          ],
          showCancelLink: true,
          copyStyles: false
        }
      }
    ];

    controller.set('steps', steps);
  }
});
