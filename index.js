'use strict';

module.exports = {
  name: require('./package').name,
  options: {
    babel: {
      plugins: [require.resolve('ember-auto-import/babel-plugin')],
    },
  },
  included() {
    this.app.import('node_modules/shepherd.js/dist/css/shepherd.css');

    this._super.included.apply(this, arguments);
  },
};
