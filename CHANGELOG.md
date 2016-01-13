We will list changes, especially breaking changes, between versions here.

**1.1.0**

* Must now use `tour.start()` instead of `tour.trigger('start')`
* tour now emits events, instead of the tour object
* tour now emits events for *all* actions `next`, `back`, `complete`, `cancel`, `start`
