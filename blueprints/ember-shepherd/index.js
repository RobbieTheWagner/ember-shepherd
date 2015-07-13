//blueprints/ember-shepherd/index.js
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackageToProject('tether-shepherd', '1.1.3'); // is a promise
  }
};
