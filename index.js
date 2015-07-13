/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-shepherd',
  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/tether-shepherd/dist/css/shepherd-theme-arrows.css');
    this.app.import(app.bowerDirectory + '/tether/dist/js/tether.js');
    this.app.import(app.bowerDirectory + '/tether-shepherd/dist/js/shepherd.js');
    this.app.import('vendor/jquery-disablescroll/jquery.disablescroll.js');
  }
};
