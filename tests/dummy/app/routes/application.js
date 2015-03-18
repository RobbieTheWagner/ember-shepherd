import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var steps = [
      {
        id: 'first',
        options: {
          text: ['Ember-Shepherd is a javascript library for guiding users through your Ember app. ' +
          'It is an Ember addon that wraps <a href="https://github.com/HubSpot/shepherd">Shepherd</a> and ' +
          'extends its functionality. ' +
          'Shepherd uses <a href="http://github.hubspot.com/tether/">Tether</a>, another open source library, to ' +
          'position all of its steps.', 'Tether makes sure your steps never end up off screen or cropped by an ' +
          'overflow. Try resizing your browser to see what we mean.'],
          attachTo: '.first-element bottom',
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          builtInButtons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Next',
              type: 'next'
            }
          ],
          showCancelLink: true,
          copyStyles: false
        }
      },
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
