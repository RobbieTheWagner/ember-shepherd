/* eslint-disable */
'use strict';

module.exports = {
  name: 'ember-shepherd',
  included: function(app) {
    let theme = 'bower_components/tether-shepherd/dist/css/shepherd-theme-';
    if(app.options && app.options.shepherd && app.options.shepherd.theme) {
      theme += app.options.shepherd.theme;
    } else {
      theme += 'arrows'
    }
    theme += '.css';

    this.app.import(theme);
    this.app.import('bower_components/tether/dist/js/tether.js');
    this.app.import('bower_components/tether-shepherd/dist/js/shepherd.js');

    if (!process.env.EMBER_CLI_FASTBOOT) {
      this.app.import('vendor/jquery-disablescroll/jquery.disablescroll.js');
    }

    this._super.included.apply(this, arguments);
  }
};
