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
