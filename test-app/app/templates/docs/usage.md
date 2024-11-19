Usage
------------------------------------------------------------------------------

Most of the usage documentation can be found in the [API Reference for the Tour Service](api/services/tour).

## Step Options

See the [Step docs](https://shepherdjs.dev/docs/Step.html) for all available Step options.

## Interacting with `ember-shepherd`

`ember-shepherd` uses the [`Ember.Evented`](http://emberjs.com/api/classes/Ember.Evented.html) mixin to manage events.  The API is demonstrated below.

```js
// Start the tour
this.tour.start();

//Show a specific step
this.tour.show(id);

// Stop the tour
this.tour.cancel();

// Go to the next step
this.tour.next();

// Go to the previous step
this.tour.back();
```
