We will list changes, especially breaking changes, between versions here.

###**2.0.5**
* Merged https://github.com/rwwagner90/ember-shepherd/pull/37 which added support for `scrollTo:true` and `disableScroll:true`, so the elements will still scroll into view, but the user is not able to manually scroll.
* Update Ember-CLI to version 2.3.0-beta.2 and run ember init for other necessary changes

###**2.0.4**

* Added @craigsketchley 's email to bower.json and package.json
* Update README

###**2.0.3**

* Add `autoStart` so you can set the tour to automatically start after you set `steps`

###**2.0.2**

* Update Ember-CLI to version 2.3.0-beta.1 and make changes necessary for that

###**2.0.1**

* Merged https://github.com/rwwagner90/ember-shepherd/pull/33 to set pointer-events back to `'auto'` on cancel or exit

###**2.0.0**

* Fixed an issue with defaults not actually being applied because they were undefined at the time `init` was called

###**1.1.0**

* Must now use `tour.start()` instead of `tour.trigger('start')`
* tour now emits events, instead of the tour object
* tour now emits events for *all* actions `next`, `back`, `complete`, `cancel`, `start`
