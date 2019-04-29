'use strict';

module.exports = {
  name: require('./package').name,
  included(app) {
    if (app.options && app.options.shepherd && app.options.shepherd.theme) {
      app.import(`node_modules/shepherd.js/dist/css/shepherd-theme-${app.options.shepherd.theme}.css`);
    }
    this._super.included.apply(this, arguments);
  },
  options: {
    babel: {
      plugins: [ require.resolve('ember-auto-import/babel-plugin') ]
    }
  }
};
