/*jshint node:true*/
module.exports = {
  description: 'Adds ember-tether to consuming app',
  normalizeEntityName: function() {
  },
  afterInstall: function(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-tether', target: '0.3.1' }
      ]
    })
  }
};
