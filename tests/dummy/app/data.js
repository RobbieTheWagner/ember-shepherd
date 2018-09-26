export const builtInButtons = {
  cancel: {
    classes: 'shepherd-button-secondary cancel-button',
    text: 'Exit',
    type: 'cancel'
  },
  next: {
    classes: 'shepherd-button-primary next-button',
    text: 'Next',
    type: 'next'
  },
  back: {
    classes: 'shepherd-button-primary back-button',
    text: 'Back',
    type: 'back'
  }
};

export const steps = [
  {
    id: 'intro',
    options: {
      attachTo: '.first-element bottom',
      buttons: [
        builtInButtons.cancel,
        builtInButtons.next,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      title: 'Welcome to Ember Shepherd!',
      text: [
        `Ember Shepherd is a JavaScript library for guiding users through your Ember app.
           It is an Ember addon that wraps <a href="https://github.com/shipshapecode/shepherd">Shepherd</a>
           and extends its functionality. Shepherd uses <a href="https://popper.js.org/">Popper.js</a>,
           another open source library, to position all of its steps.`,
        `Popper makes sure your steps never end up off screen or cropped by an
           overflow. Try resizing your browser to see what we mean.`
      ]
    }
  },
  {
    id: 'installation',
    options: {
      attachTo: '.install-element bottom',
      buttons: [
        builtInButtons.cancel,
        builtInButtons.back,
        builtInButtons.next,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: ['Installation is simple, if you are using Ember-CLI, just install like any other addon.']
    }
  },
  {
    id: 'usage',
    options: {
      attachTo: '.usage-element bottom',
      buttons: [
        builtInButtons.cancel,
        builtInButtons.back,
        builtInButtons.next,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: ['To use the tour service, simply inject it into your application and use it like this example.']
    }
  },
  {
    id: 'modal',
    options: {
      attachTo: {
        element: '.modal-element',
        on: 'top'
      },
      buttons: [
        builtInButtons.cancel,
        builtInButtons.back,
        builtInButtons.next,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: [
        'We implemented true modal functionality by disabling clicking of the rest of the page.',
        'If you would like to enable modal, simply do this.get(\'tour\').set(\'modal\', true).'
      ]
    }
  },
  {
    id: 'buttons',
    options: {
      attachTo: '.built-in-buttons-element top',
      buttons: [
        builtInButtons.cancel,
        builtInButtons.back,
        builtInButtons.next,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: [
        `For the common button types ("next", "back", "cancel", etc.), we implemented Ember actions
          that perform these actions on your tour automatically. To use them, simply include
          in the buttons array in each step.`
      ]
    }
  },
  {
    id: 'disableScroll',
    options: {
      attachTo: '.disable-scroll-element top',
      buttons: [
        builtInButtons.cancel,
        builtInButtons.back,
        builtInButtons.next,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: [
        `When navigating the user through a tour, you may want to disable scrolling, so they
          cannot mess up your carefully planned out, amazing tour. This is now easily achieved
          with this.get('tour').set('disableScroll', true).`,
        'Try scrolling right now, then exit the tour and see that you can again!']
    }
  },
  {
    id: 'noAttachTo',
    options: {
      buttons: [
        builtInButtons.cancel,
        builtInButtons.back,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: ['If no attachTo is specified, the modal will appear in the center of the screen, as per the Shepherd docs.']
    }
  }
];
