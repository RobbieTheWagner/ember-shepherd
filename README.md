# Ember-shepherd

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
ember install:addon ember-shepherd
```

After installing, you'll need to include the tour component in the template for the page you would like it on. If you would like it on multiple pages, I would recommend putting it in the application template, so it will be accessible on any route.

```hbs
{{ember-shepherd 
currentPath=currentPath 
defaults=shepherdDefaults 
disableScroll=true
modal=isModal 
requiredElements=requiredElements
start=showHelp 
steps=steps}}
```

### currentPath
**currentPath** is used to detect route changes, and cancel the tour when one occurs. If you put the code in your 
application level template, ```currentPath=currentPath``` is all you need. If you are using it somewhere else, you 
will need to pass in ```controllerFor('application').get('currentPath')```.

If you **do not** want the tour to cancel when you switch routes, just do not specify anything for currentPath, but 
this functionality is not yet supported, so you'll have to do some hacky things.

### defaults
**defaults** is used to set the options that will be applied to each step by default. You can pass in any of the options that you can with Shepherd. It will be an object of a form something like:
```js
var shepherdDefaults = 
{
  classes: 'shepherd-element shepherd-open shepherd-theme-arrows',
  scrollTo: false,
  showCancelLink: true
};
```

### disableScroll
**disableScroll** is a boolean, that when set to true, will keep the user from scrolling with the scrollbar, 
mousewheel, arrow keys, etc. You may want to use this to ensure you are driving the scroll position with the tour. 
Thanks to [jquery-disablescroll](https://github.com/ultrapasty/jquery-disablescroll) for this functionality.

### modal
**modal** is a boolean, that should be set to true, if you would like the rest of the screen, other than the current element, greyed out, and the current element highlighted. If you do not need modal functionality, you can remove this option or set it to false.

### requiredElements (optional)
**requiredElements** is an array of objects that indicate DOM elements that are **REQUIRED** by your tour and must 
exist and be visible for the tour to start. If any elements are not present, it will keep the tour from starting.

You can also specify a message, this message can be used to tell the user what they need to do to make the tour work.

You'll want to do something like this:
```js
controllerFor('application').set('requiredElements', [
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
    ]);

```

### start
**start** should be set to true, when you would like the tour to start. Set it to a variable, and set that variable to true with an action in your Ember app, when you click a button or something, to initiate the tour.

On the demo page, we initiate the tour, supporting both modal, and non-modal, by calling the following actions on the application controller:

```js
actions: {
    toggleHelpModal: function() {
      this.set('isModal', true);
      this.toggleProperty('showHelp');
    },
    toggleHelpNonmodal: function() {
      this.set('isModal', false);
      this.toggleProperty('showHelp');
    }
  }
```

### steps

You will need to define a steps object to pass into your component of the following form:

```js
var steps = [
      {
        id: 'intro',
        options: {
          attachTo: '.first-element bottom',
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
          text: ['Ember-Shepherd is a javascript library for guiding users through your Ember app. ' +
          'It is an Ember addon that wraps <a href="https://github.com/HubSpot/shepherd">Shepherd</a> and ' +
          'extends its functionality. ' +
          'Shepherd uses <a href="http://github.hubspot.com/tether/">Tether</a>, another open source library, to ' +
          'position all of its steps.', 'Tether makes sure your steps never end up off screen or cropped by an ' +
          'overflow. Try resizing your browser to see what we mean.'],
          when: {
            show: function() {
              console.log('show step');
            }.bind(this),
            hide: function(){
              console.log('hide step')
            }.bind(this)
          }
        }
      },
      ...........
      ];
```

A lot of the options are the same as Shepherd options, but I will go through each of them for reference.
- **id**: The name to give this step of the tour
- **options**: an object with all of the options for the step
  - **attachTo**: The selector and position for the tour popup to attach to, of the format 'selector position'. Position options are: top, bottom, left, and right.
  - **builtInButtons**: These are the standard button types supported by Shepherd. Just set type to next, back or cancel, then set the text, and classes as normal.
  - **classes**: Extra classes to apply to the step, for styling purposes and such.
  - **copyStyles**: This is a boolean, and when set to ```true``` it will fully clone the element and styles, rather than just increasing the element's z-index. This should only be used if the element does not pop out and highlight like it should, when using modal functionality.
  - **highlightClass**: This is an extra class to apply to the attachTo element, when it is highlighted. It can be 
  any string. Just style that class name in your css.
  - **scrollTo**: This sets whether the screen should be scrolled to get to the element or not, when the step is active.
  - **showCancelLink**: When true, an x will appear in the top right of the popup, for canceling the tour.
  - **title**: The step's title. It becomes an h3 at the top of the step.
  - **tetherOptions**: Extra options to pass to tether
  - **text**: A string of text content to display in the tour popup
  - **when**: An object that contains function to be executed when events occur on the step. Supported events are **show, hide, complete, cancel, and destroy**.

## Contributing
Please feel free to post any issues you encounter or feature requests on the issues in this repo. Pull requests welcome as well!
