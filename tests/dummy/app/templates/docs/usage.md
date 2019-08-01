Usage
------------------------------------------------------------------------------

Most of the usage documentation can be found in the [API Reference for the Tour Service](/docs/api/services/tour).

A lot of the options are the same as Shepherd options, but I will go through each of them for reference.

## Step Options

### attachTo

The selector and position for the tour popup to attach to. Position options are: top, bottom, left, and right.

```js
{
  element: '.myElement',
  on: 'top'
}
```

Where `.myElement` is any valid CSS selector.

> **default value:** `undefined`


### beforeShowPromise

A function that returns a promise. When the promise resolves, the rest of the `show` code for the step will execute. This is a good place to schedule things in the Ember.run loop that you need to ensure happen before show.

> **default value:** `null`


### buttons

There are some standard button types supported by ember-shepherd. Just set `type` to `'next'`, `'back'`, or `'cancel'`, then set the `text` and `classes` as normal. These will automatically be bound to the Shepherd functions. If no type is passed, a normal Shepherd button will be created.

### classes

Extra classes to apply to the step, for styling purposes and such.

> **default value:** `''`


### canClickTarget

Whether or not the target element being attached to should be "clickable". If set to `false`, Ember Shepherd sets the element's [`pointerEvents` style](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events) to `none` while the step is active.

> **default value:** `true`


### highlightClass

This is an extra class to apply to the attachTo element when it is highlighted (that is, when its step is active). It can be any string. Just style that class name in your CSS.

> **default value:** ``

### id

The name to give this step of the tour


### scrollTo

This sets whether or not the screen should be scrolled to get to the element when the step becomes active.

> **default value:** `false`


### scrollToHandler

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
    {
      attachTo: {
        element: '#first-item',
        on: 'left'
      },
      id: 'intro',
      title: 'Welcome!',
      text: 'Have we met before?',
      scrollTo: true,
      scrollToHandler: scrollHandler
    }
  ];

```

> **default value:** `null`


### showCancelLink

When true, an x will appear in the top right of the popup, for canceling the tour.

> **default value:** `false`


### title

The step's title. It becomes an h3 at the top of the step.

> **default value:** `''`


### tippyOptions

Extra options to pass to [Tippy](https://atomiks.github.io/tippyjs/#all-options).

> **default value:** `null`


### text

The text content to display in the tour popup. Can be:
+ a string
+ an array of strings
+ an HTML element
+ a function returning any of the above

Currently does ***not*** accept htmlbars input (PR welcome).

> **default value:** `null`


### when

An object containing functions to be executed when events occur on the step.  Supported events are `before-show`, `show`, `before-hide`, `hide`, `complete`, `cancel`, and `destroy`.

```js
  when: {
    show() {
      window.scrollTo(0, 0);
    }
  }
```

> **default value:** `null`

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
