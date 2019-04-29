'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: require('./package').name,
  included(app) {
    if (app.options && app.options.shepherd && app.options.shepherd.theme) {
      this.theme = `dist/css/shepherd-theme-${app.options.shepherd.theme}.css`;
    }

    this._super.included.apply(this, arguments);
  },
  options: {
    babel: {
      plugins: [ require.resolve('ember-auto-import/babel-plugin') ]
    },
    nodeAssets: {
      'shepherd.js'() {
        const include = [];

        if (this.theme) {
          include.push(this.theme);
        }

        return {
          import: {
            include,
            processTree(tree) {
              return fastbootTransform(tree);
            }
          }
        };
      }
    }
  }
};
