'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },
  included() {
    let app = this._findHost();

    this._super.included.apply(this, arguments);

    let addonConfig = Object.assign({}, app.options['ember-shepherd']);

    // Don't include the precompiled css file if the user uses a supported CSS preprocessor
    if (addonConfig.includeStyles !== false) {
      app.import('node_modules/shepherd.js/dist/css/shepherd.css');
    }
  },
};
