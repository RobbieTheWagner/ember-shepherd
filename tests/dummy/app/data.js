export default [
  {
    id: 'intro',
    options: {
      attachTo: '.first-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      title: 'Welcome to Ember Shepherd!',
      text: [
        `Ember Shepherd is a javascript library for guiding users through your Ember app.
           It is an Ember addon that wraps <a href="https://github.com/shipshapecode/shepherd">Shepherd</a>
           and extends its functionality. Shepherd uses <a href="https://github.com/FezVrasta/popper.js">Popper.js</a>,
           another open source library, to position all of its steps.`,
        `Popper.js makes sure your steps never end up off screen or cropped by an
           overflow. Try resizing your browser to see what we mean.`
      ]
    }
  },
  {
    id: 'installation',
    options: {
      attachTo: '.install-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary back-button',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['Installation is simple, if you are using Ember-CLI, just install like any other addon.']
    }
  },
  {
    id: 'usage',
    options: {
      attachTo: '.usage-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary back-button',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
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
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary back-button',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: [
        'We implemented true modal functionality by disabling clicking of the rest of the page.',
        'If you would like to enable modal, simply do this.get(\'tour\').set(\'modal\', true).'
      ]
    }
  },
  {
    id: 'copyStyle',
    options: {
      attachTo: {
        element: '.style-copy-element',
        on: 'top'
      },
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary back-button',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: [
        `When using a modal, most times just setting the z-index of your element to something high will
           make it highlight. For complicated cases, where this does not work, we implemented a copyStyles option
           that clones the element and copies its computed styles.`
      ]
    }
  },
  {
    id: 'builtInButtons',
    options: {
      attachTo: '.built-in-buttons-element top',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary back-button',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: [
        `For the common button types, next, back, cancel, etc, we implemented Ember actions
          that perform these actions on your tour automatically. To use them, simply include
          in the builtInButtons array in each step.`
      ]
    }
  },
  {
    id: 'disableScroll',
    options: {
      attachTo: '.disable-scroll-element top',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary back-button',
          text: 'Back',
          type: 'back'
        },
        {
          classes: 'shepherd-button-primary next-button',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
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
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary cancel-button',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary back-button',
          text: 'Back',
          type: 'back'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      text: ['If no attachTo is specified, the modal will appear in the center of the screen, as per the Shepherd docs.']
    }
  }];
