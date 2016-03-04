/* jshint node: true */
/* global require, module */

var EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  var app = new EmberAddon(defaults, {
  });

  app.import('bower_components/prism/prism.js');
  app.import('bower_components/prism/themes/prism.css');
  app.import('bower_components/prism/components/prism-bash.js');
  app.import('bower_components/prism/components/prism-handlebars.js');

  return app.toTree();
};
