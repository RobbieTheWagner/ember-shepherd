## Q/A

### Q: Woah, events? How does that work with buttons?

A: Don't worry, it's not too bad! You can just set up an action to start (or cancel, or advance, etc.) the tour like so:

```js
// app/routes/application.js

import Route from "@ember/routing/route";
import { service } from "@ember/service";

export default Route.extend({
  tour: service(),

  actions: {
    startTour() {
      this.tour.start();
    },
  },
});
```

### Q: How do I make a tour span multiple route transitions?

A : You can use `beforeShowPromise` to ensure you have fully transitioned to the new route before showing
the step by doing something like this:

```js
beforeShowPromise() {
  return new Promise(function(resolve) {
    router.transitionTo('myurl').finally(() => {
      Ember.run.scheduleOnce('afterRender', this, function() {
        resolve();
      });
    });
  });
}
```
