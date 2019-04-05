ember-shepherd
==============================================================================

<a href="https://shipshape.io/"><img src="http://i.imgur.com/DWHQjA5.png" alt="Ship Shape" width="100" height="100"/></a>

**[ember-shepherd is built and maintained by Ship Shape. Contact us for Ember.js consulting, development, and training for your project](https://shipshape.io/ember-consulting/)**.

[![npm version](https://badge.fury.io/js/ember-shepherd.svg)](http://badge.fury.io/js/ember-shepherd)
![Download count all time](https://img.shields.io/npm/dt/ember-shepherd.svg)
[![npm](https://img.shields.io/npm/dm/ember-shepherd.svg)]()
[![Ember Observer Score](http://emberobserver.com/badges/ember-shepherd.svg)](http://emberobserver.com/addons/ember-shepherd)
[![Build Status](https://travis-ci.org/shipshapecode/ember-shepherd.svg)](https://travis-ci.org/shipshapecode/ember-shepherd)
[![Code Climate](https://codeclimate.com/github/shipshapecode/ember-shepherd/badges/gpa.svg)](https://codeclimate.com/github/shipshapecode/ember-shepherd)
[![Test Coverage](https://codeclimate.com/github/shipshapecode/ember-shepherd/badges/coverage.svg)](https://codeclimate.com/github/shipshapecode/ember-shepherd/coverage)
[![Greenkeeper badge](https://badges.greenkeeper.io/shipshapecode/ember-shepherd.svg)](https://greenkeeper.io/)

This is an Ember wrapper for the [Shepherd](https://github.com/shipshapecode/shepherd), site tour, library. It provides additional functionality, on top of Shepherd, as well.

Compatibility
------------------------------------------------------------------------------

* Ember.js v2.18 or above
* Ember CLI v2.13 or above


Installation
------------------------------------------------------------------------------

```
ember install ember-shepherd
```

Demo
------------------------------------------------------------------------------

[![Guide your users through a tour of your app](http://i.imgur.com/VxJtJDI.png)](http://shipshapecode.github.io/ember-shepherd/)
http://shipshapecode.github.io/ember-shepherd/

Usage
------------------------------------------------------------------------------


## Configuration

The following configuration options can be `set` on the Tour service to control the way that Shepherd is used. **The only required option is `steps`, which is set via `addSteps`.**

### addSteps

You must pass an array of steps to `addSteps`, something like this:

```js
this.get('tour').addSteps([
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
      buttons: [
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
      classes: 'custom-class-name-1 custom-class-name-2',
      highlightClass: 'highlight',
      scrollTo: false,
      showCancelLink: true,
      title: 'Welcome to Ember-Shepherd!',
      text: ['Ember-Shepherd is a JavaScript library for guiding users through your Ember app.'],
      when: {
        show: () => {
          console.log('show step');
        },
        hide: () => {
          console.log('hide step');
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

> **default value:** `''`


##### beforeShowPromise

A function that returns a promise. When the promise resolves, the rest of the `show` code for the step will execute. This is a good place to schedule things in the Ember.run loop that you need to ensure happen before show.

> **default value:** `null`


##### buttons

There are some standard button types supported by ember-shepherd. Just set `type` to `'next'`, `'back'`, or `'cancel'`, then set the `text` and `classes` as normal. These will automatically be bound to the Shepherd functions. If no type is passed, a normal Shepherd button will be created.

##### classes

Extra classes to apply to the step, for styling purposes and such.

> **default value:** `''`


#### canClickTarget

Whether or not the target element being attached to should be "clickable". If set to `false`, Ember Shepherd sets the element's [`pointerEvents` style](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) to `none` while the step is active.

> **default value:** `true`


##### highlightClass

This is an extra class to apply to the attachTo element when it is highlighted (that is, when its step is active). It can be any string. Just style that class name in your CSS.

> **default value:** ``


##### scrollTo

This sets whether or not the screen should be scrolled to get to the element when the step becomes active.

> **default value:** `false`


##### scrollToHandler

For custom scrolling actions, pass a function to this option. For example:

``` javascript

  let scrollHandler = (el) => {
    let winHeight = Ember.$(window).height();
    // Target vertical middle scroll position
    let targetPos = (Ember.$(el).offset().top + Ember.$(el).position().top) - (winHeight / 2);
    // Animate scrolling with Velocity.js, for example.
    Ember.$('#main-scroll-container').velocity({ top: targetPos }, 1000, "swing");
  };

  let steps = [
    {id: 'intro',
     options: {
        attachTo: '#first-item left',
        title: 'Welcome!',
        text: ["Have we met before?"],
        scrollTo: true,
        scrollToHandler: scrollHandler
      }
    }
  ];

```

> **default value:** `null`


##### showCancelLink

When true, an x will appear in the top right of the popup, for canceling the tour.

> **default value:** `false`


##### title

The step's title. It becomes an h3 at the top of the step.

> **default value:** `''`


##### tippyOptions

Extra options to pass to [Tippy](https://atomiks.github.io/tippyjs/#all-options).

> **default value:** `null`


##### text

The text content to display in the tour popup. Can be:
+ a string
+ an array of strings
+ an HTML element
+ a function returning any of the above

Currently does ***not*** accept htmlbars input (PR welcome).

> **default value:** `null`


##### when

An object containing functions to be executed when events occur on the step.  Supported events are `before-show`, `show`, `before-hide`, `hide`, `complete`, `cancel`, and `destroy`.

```js
  when: {
    show: function() {
      window.scrollTo(0, 0);
    }
  }
```

> **default value:** `null`


## Themes

Shepherd has several built in themes. You can specify which theme to include in `ember-cli-build.js` like so:

```js
var app = new EmberApp(defaults, {
  shepherd: {
    theme: 'dark'
  }
});
```

### Using SASS Variables

If you are using `ember-cli-sass`, you can create your own themes by overriding the sass variables before importing
the styles from Shepherd. First, you will need to add the path to `includePaths`.

```js
// ember-cli-build.js
...
  const app = new EmberAddon(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/shepherd.js/src/scss'
      ]
    }
  });
...
```

Then you should be able to override variables and import the scss file for the theme.

```scss
// Shepherd theme overrides
$shepherd-text-background: $background1;
$shepherd-theme-primary: $background2;
$shepherd-theme-secondary: $whiteish;

@import "shepherd-theme-default";
```

A complete list of the variables you can override can be found in the [Shepherd docs](https://shipshapecode.github.io/shepherd/).


## Interacting with `ember-shepherd`

`ember-shepherd` uses the [`Ember.Evented`](http://emberjs.com/api/classes/Ember.Evented.html) mixin to manage events.  The API is demonstrated below.

```js
// Start the tour
this.get('tour').start();

//Show a specific step
this.get('tour').show(id);

// Stop the tour
this.get('tour').cancel();

// Go to the next step
this.get('tour').next();

// Go to the previous step
this.get('tour').back();
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
