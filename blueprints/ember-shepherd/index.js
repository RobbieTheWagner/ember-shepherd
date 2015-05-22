//blueprints/ember-shepherd/index.js
module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addBowerPackageToProject('shepherd.js', '0.7.1'); // is a promise
  }
};
