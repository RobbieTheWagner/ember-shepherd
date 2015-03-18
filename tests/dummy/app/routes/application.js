import Ember from 'ember';

export default Ember.Route.extend({
  setupController: function(controller, model) {
    var steps = [
      {
        id: 'intro',
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
        id: 'installation',
        options: {
          text: ['Installation is simple, if you are using Ember-CLI, just install like any other addon.'],
          attachTo: '.install-element bottom',
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          builtInButtons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
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
        id: 'usage',
        options: {
          text: ['To instantiate the tour, just put this code in your application template, wherever you would like.'],
          attachTo: '.usage-element bottom',
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          builtInButtons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
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
        id: 'modal',
        options: {
          text: ['We implemented true modal functionality by disabling clicking of the rest of the page. ' +
          'If you would like to enable modal, simply set modal=true.'],
          attachTo: '.modal-element top',
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          builtInButtons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
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
        id: 'copyStyle',
        options: {
          text: ['When using a modal, most times just setting the z-index of your element to something high will ' +
          'make it highlight. For complicated cases, where this does not work, we implemented a copyStyles option ' +
          'that clones the element and copies its computed styles.'],
          attachTo: '.style-copy-element top',
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          builtInButtons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
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
        id: 'builtInButtons',
        options: {
          text: ['For the common button types, next, back, cancel, etc, we implemented Ember actions that perform ' +
          'these actions on your tour automatically. To use them, simply include in the builtInButtons array in ' +
          'each step.'],
          attachTo: '.built-in-buttons-element top',
          classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
          builtInButtons: [
            {
              classes: 'shepherd-button-primary',
              text: 'Back',
              type: 'back'
            },
            {
              classes: 'shepherd-button-primary',
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

    controller.set('usage', '{{ember-shepherd \n' +
    'steps=steps \n' +
    'start=showHelp \n' +
    'modal=true}}');
  }
});
