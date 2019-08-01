### Using Style Variables

Shepherd uses nano-css to automatically ship all the styles as part of the JS bundle. 
We have a default set of variables, which can be overridden to achieve whatever look and feel you would like.

```js
tour.set('styleVariables', {
  shepherdTextBackground: '#3d2f53',
  shepherdThemePrimary: '#624b86',
  shepherdThemeSecondary: '#c8c7d5'
});
```

A complete list of the variables you can override can be found in the [Shepherd docs](https://shepherdjs.dev/docs/tutorial-03-styling.html).
