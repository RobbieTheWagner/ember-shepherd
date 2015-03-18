# Ember-shepherd

This is an Ember wrapper for the [Shepherd](https://github.com/HubSpot/Shepherd), site tour, library. It provides additional functionality, on top of Shepherd, as well.

## Getting started

To start, if you are using Ember CLI, simply run:
```bash
ember install:addon ember-shepherd
```

After installing, you'll need to include the tour component in the template for the page you would like it on. If you would like it on multiple pages, I would recommend putting it in the application template, so it will be accessible on any route.

```hbs
{{ember-shepherd
steps=steps
start=showHelp
modal=true}}
```

### steps

You will need to define a steps object to pass into your component of the following form:

```js
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
      ...........
      ];
```

A lot of the options are the same as Shepherd options, but I will go through each of them for reference.
- **id**: The name to give this step of the tour
- **options**: an object with all of the options for the step
  - **text**: A string of text content to display in the tour popup
  - **attachTo**: The selector and position for the tour popup to attach to, of the format 'selector position'. Position options are: top, bottom, left, and right.
