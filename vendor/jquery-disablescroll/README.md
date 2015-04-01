jquery-disablescroll
===

Author: [Josh Harrison](http://www.joshharrison.net) at [Aloof](http://aloof.co)

Disables scrolling from scrollbars, mousewheels, touchmoves and keypresses on a given scrollable element, typically `$(window)`.

Use it while jQuery is animating the scroll position for a super-smooth ride!


Demo
---
**http://jsfiddle.net/3n34qw6r/**


Example Usage
---

    var $window = $(window);

    // Disable user scrolling just before animating scrollTop.
    // Note that the `handleScrollbar` option must be false if you want to
    // modify the scroll position whilst it is disabled.
    $window.disablescroll({
        handleScrollbar: false
    });

    $("html, body").animate({ scrollTop: 500 }, "slow", function() {

        // Enable user scrolling again when animated scrolling completes
        $window.disablescroll("undo");

    });


Options
---

Can be passed on first use:

    $element.disablescroll({
        option : value
    });

Option            | Default Value                              | Description
:---------------- | :----------------------------------------- | :---------------------------------------------------------
handleWheel       | `true`                                     | Boolean indicating whether to disable mouse wheels.
handleScrollbar   | `true`                                     | Boolean indicating whether to disable scroll bar dragging. Set to `false` if you need to modify the scroll position whilst scrolling is disabled.
handleKeys        | `true`                                     | Boolean indicating whether to disable scrolling triggered by keypresses, e.g. the down button.
scrollEventKeys   | `[32, 33, 34, 35, 36, 37, 38, 39, 40]`     | Array of scroll-related keycodes to disable during scroll. See below for reference.


Keycode Reference
---

The following scroll-related keys are all included by default:

Keycode    | Key
:--------- | :-----------
32         | Spacebar
33         | Page Up
34         | Page Down
35         | End
36         | Home
37         | Left Arrow
38         | Up Arrow
39         | Right Arrow
40         | Down Arrow


Non-jQuery Usage
---
If you want to toy around with the object and its prototype, you can access it
at `window.UserScrollDisabler`.

Compatibility
---
Tested in:
- Mac: Chrome 38
- Mac: Firefox 33.1
- Mac: Safari 7.1
- Windows: IE 7-11
- Windows: Chrome 38
- Windows: Firefox 33.1
- Android: Chrome 38
- iOS 7.1 and 8.1: Safari

Known Issues
---
- Mac Safari 7.1 is a bit flickery when dragging a disabled scrollbar.
- One report of IE flickering when dragging a disabled scrollbar, although I
was unable to reproduce this.
- Not sure if there is a workaround for these flickering issues, as scrolling by
dragging the scrollbar does not trigger any cancellable events. This only leaves
us with the option of setting the scroll position back to what it was before on
every scroll event. I'm surprised this doesn't flicker in more browsers.