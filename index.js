/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-shepherd',
  included(app) {
    let theme = 'css/shepherd-theme-';
    if (app.options && app.options.shepherd && app.options.shepherd.theme) {
      theme += app.options.shepherd.theme;
    } else {
      theme += 'arrows'
    }
    theme += '.css';

    this.theme = theme;

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.app.import('vendor/jquery-disablescroll/jquery.disablescroll.js');
    }

    this._super.included.apply(this, arguments);
  },
  options: {
    nodeAssets: {
      'tether-shepherd': function() {
        return {
          enabled: !process.env.EMBER_CLI_FASTBOOT,
          srcDir: 'dist',
          import: [
            'js/shepherd.js',
            this.theme
          ]
        };
      }
    }
  }
};
