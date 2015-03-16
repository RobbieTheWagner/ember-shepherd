/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-shepherd',
  included: function(app) {
    this._super.included(app);
    this.app.import(app.bowerDirectory + '/shepherd.js/css/shepherd-theme-arrows.css');
    this.app.import(app.bowerDirectory + '/shepherd.js/shepherd.js');
  }
};
