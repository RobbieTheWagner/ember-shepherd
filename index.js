/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-shepherd',
  included: function(app) {
    this._super.included(app);

    this.app.import('bower_components/tether-shepherd/dist/css/shepherd-theme-arrows.css');
    this.app.import('bower_components/tether/dist/js/tether.js');
    this.app.import('bower_components/tether-shepherd/dist/js/shepherd.js');
    this.app.import('vendor/jquery-disablescroll/jquery.disablescroll.js');
  }
};
