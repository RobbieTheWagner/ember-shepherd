# Ember-shepherd

[![Join the chat at https://gitter.im/rwwagner90/ember-shepherd](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/rwwagner90/ember-shepherd?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

[![npm version](https://badge.fury.io/js/ember-shepherd.svg)](http://badge.fury.io/js/ember-shepherd)
[![npm](https://img.shields.io/npm/dm/ember-shepherd.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-shepherd.svg)](http://emberobserver.com/addons/ember-shepherd)
[![Build Status](https://travis-ci.org/rwwagner90/ember-shepherd.svg)](https://travis-ci.org/rwwagner90/ember-shepherd)

This is an Ember wrapper for the [Shepherd](https://github.com/HubSpot/Shepherd), site tour, library. It provides additional functionality, on top of Shepherd, as well.

## Demo

[![Guide your users through a tour of your app](http://i.imgur.com/yOw7GrM.png)](http://rwwagner90.github.io/ember-shepherd/)
http://rwwagner90.github.io/ember-shepherd/

## Getting started

To start, if you are using Ember CLI, simply run:
```bash
ember install ember-shepherd
```

If you are not using Ember CLI, we recommend using [ember-giftwrap](https://github.com/ef4/ember-giftwrap) to install your Ember addons.

## Usage

Interaction with `ember-shepherd` is done entirely through the Tour service, which you can access on all of your controllers and routes using `this.tour`, or from any other object using the `Ember.inject` syntax:

```js
export default Ember.Component.extend({

  tour: Ember.inject.service()

  // OR

  tourService: Ember.inject.service('tour')
})
```

From here, you can set the desired configuration, as detailed below.


## Configuration

The following configuration options can be `set` on the Tour service to control the way that Shepherd is used.  The only required option is `steps`, which you can read more about below.

### defaults

`defaults` is used to set the options that will be applied to each step by default. You can pass in any of the options that you can with Shepherd. It will be an object of a form something like:

```js
this.tour.set('defaults', {
  classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
  scrollTo: false,
  showCancelLink: true
});
```

> **default value:** `{}`

### disableScroll

`disableScroll` is a boolean, that when set to true, will keep the user from scrolling with the scrollbar,
mousewheel, arrow keys, etc. You may want to use this to ensure you are driving the scroll position with the tour.
Thanks to [jquery-disablescroll](https://github.com/ultrapasty/jquery-disablescroll) for this functionality.

> **default value:** `false`

### modal

`modal` is a boolean, that should be set to true, if you would like the rest of the screen, other than the current element, greyed out, and the current element highlighted. If you do not need modal functionality, you can remove this option or set it to false.

> **default value:** `false`

### requiredElements

`requiredElements` is an array of objects that indicate DOM elements that are **REQUIRED** by your tour and must
exist and be visible for the tour to start. If any elements are not present, it will keep the tour from starting.

You can also specify a message, which will tell the user what they need to do to make the tour work.

_Example_
```js
this.tour.set('requiredElements', [
  {
    selector: '.search-result-element',
    message: 'No search results found. Please execute another search, and try to start the tour again.',
    title: 'No results'
  },
  {
    selector: '.username-element',
    message: 'User not logged in, please log in to start this tour.',
    title: 'Please login'
  },
);
```

> **default value:** `[]`


### steps

You will need to define a steps object to set on the tour service of the following form:

```js
this.tour.set('steps', [
  {
    id: 'intro',
    options: {
      attachTo: '.first-element bottom',
      beforeShowPromise: function() {
        return new Promise(function(resolve) {
          Ember.run.scheduleOnce('afterRender', this, function() {
            window.scrollTo(0, 0);
            this.get('documents.firstObject').set('isSelected', true);
            resolve();
          });
        });
      },
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
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
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      highlightClass: 'highlight',
      scrollTo: false,
      showCancelLink: true,
      title: 'Welcome to Ember-Shepherd!',
      text: ['Ember-Shepherd is a javascript library for guiding users through your Ember app.']
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step')
        }
      }
    }
  },
  ...
]);
```

A lot of the options are the same as Shepherd options, but I will go through each of them for reference.

#### id

The name to give this step of the tour

#### options

An object with all of the options for the step

##### attachTo

The selector and position for the tour popup to attach to, of the format 'selector position'. Position options are: top, bottom, left, and right.
Can also be an object formatted like

```js
{
  element: '.myElement',
  on: 'top'
}
```

Where `.myElement` is any valid jQuery selector.

##### beforeShowPromise

A function that returns a promise. When the promise resolves, the rest of the `show` code for the step will execute. This is a good place to schedule things in the Ember.run loop that you need to ensure happen before show.

##### builtInButtons

These are the standard button types supported by Shepherd. Just set type to next, back or cancel, then set the text, and classes as normal.

##### classes

Extra classes to apply to the step, for styling purposes and such.

##### copyStyles

This is a boolean, and when set to `true` it will fully clone the element and styles, rather than just increasing the element's z-index. This should only be used if the element does not pop out and highlight like it should, when using modal functionality.

##### highlightClass

This is an extra class to apply to the attachTo element, when it is highlighted. It can be any string. Just style that class name in your css.

##### scrollTo

This sets whether the screen should be scrolled to get to the element or not, when the step is active.

##### showCancelLink

When true, an x will appear in the top right of the popup, for canceling the tour.

##### title

The step's title. It becomes an h3 at the top of the step.

##### tetherOptions

Extra options to pass to tether

##### text

A string of text content to display in the tour popup

##### when

An object that contains function to be executed when events occur on the step.  Supported events are `before-show`, `show`, `before-hide`, `hide`, `complete`, `cancel`, and `destroy`.

## Interacting with `ember-shepherd`

`ember-shepherd` uses the [`Ember.Evented`](http://emberjs.com/api/classes/Ember.Evented.html) mixin to manage events.  The API is demonstrated below.

```js
// Start the tour
this.tour.trigger('start');

// Stop the tour
this.tour.trigger('cancel');

// Go to the next step
this.tour.trigger('next');

// Go to the previous step
this.tour.trigger('back');
```

## Q/A

### Q: Woah, events? How does that work with buttons?

A: Don't worry, it's not too bad!  Since the service is available almost everywhere, you can just set up an action to start (or cancel, or advance, etc.) the tour like so:

```js
// app/routes/application.js

export default Ember.Route.extend({

  tour: Ember.inject.service(),

  actions: {
    startTour: function() {
      this.get('tour').trigger('start');
    }
  }
});
```

where `start` is one of the events described above.


## Contributing
Please feel free to post any issues you encounter or feature requests on the issues in this repo. Pull requests welcome as well!
