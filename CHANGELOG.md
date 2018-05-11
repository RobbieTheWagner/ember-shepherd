We will list changes, especially breaking changes, between versions here.

### **3.2.0**
* Fixed `disableScroll` bug
* Refactored methods a bit

### **3.1.0**
* Removed `ember-window-mock` dependency

### **3.0.0**
* Removed `autoStart`, so this is a breaking change if you were relying on the tour to start itself.

### **2.9.0**
* General refactoring and moving utils methods to utils.js

### **2.8.0**
* Remove jQuery
* Refactor tests
* 99% test coverage
* Merged https://github.com/shipshapecode/ember-shepherd/pull/168 to fix `copyStyles`

### **2.6.0**
* Update `ember-tether` and remove from `peerDependencies`

### **2.5.0**
* Apply `highlightClass`, if supplied, all the time, not just when modal

### **2.4.5**
* Update a bunch of dependencies

### **2.4.3**
* Add a blueprint, so we make sure ember-tether is pulled in

### **2.4.2**
* Fix ember-cli-node-assets fastboot issues
* Make ember-tether a peer dep

### **2.4.0**
* Move tether-shepherd to npm, instead of bower, depend on ember-tether, rather than pulling in tether separately, to avoid pulling it in twice and possible mismatches, when people also use ember-tether in their app. 

### **2.3.2**
* Added the `show` function, which allows you to pick a specific step to show by id

### **2.3.0**
* Added ability to choose which theme to include

### **2.2.1**
* Added ability to pass a `scrollToHandler`, to adjust animations and do any logic you want on scroll.
Thanks to @sirvine for this feature!

### **2.2.0**
* Added `confirmCancel` and `confirmCancelMessage` which use native dialogs to confirm you want to exit the tour. Thanks to @djsegal for this feature!

### **2.0.9**
* Merged https://github.com/shipshapecode/ember-shepherd/pull/45 which enabled recalculating of the positioning of the `highlightElement`, created by `copyStyles`.
* Merged https://github.com/shipshapecode/ember-shepherd/pull/46 which replaced the use of `.cssText` with some more cross browser friendly methods.

### **2.0.5**
* Merged https://github.com/rwwagner90/ember-shepherd/pull/37 which added support for `scrollTo:true` and `disableScroll:true`, so the elements will still scroll into view, but the user is not able to manually scroll.
* Update Ember-CLI to version 2.3.0-beta.2 and run ember init for other necessary changes

### **2.0.4**

* Added @craigsketchley 's email to bower.json and package.json
* Update README

### **2.0.3**

* Add `autoStart` so you can set the tour to automatically start after you set `steps`

### **2.0.2**

* Update Ember-CLI to version 2.3.0-beta.1 and make changes necessary for that

### **2.0.1**

* Merged https://github.com/rwwagner90/ember-shepherd/pull/33 to set pointer-events back to `'auto'` on cancel or exit

### **2.0.0**

* Fixed an issue with defaults not actually being applied because they were undefined at the time `init` was called

### **1.1.0**

* Must now use `tour.start()` instead of `tour.trigger('start')`
* tour now emits events, instead of the tour object
* tour now emits events for *all* actions `next`, `back`, `complete`, `cancel`, `start`
