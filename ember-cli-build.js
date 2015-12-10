/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
  });

  app.import(app.bowerDirectory + '/prism/prism.js');
  app.import(app.bowerDirectory + '/prism/themes/prism.css');
  app.import(app.bowerDirectory + '/prism/components/prism-bash.js');
  app.import(app.bowerDirectory + '/prism/components/prism-handlebars.js');

  return app.toTree();
};
