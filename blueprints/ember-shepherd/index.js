module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackageToProject('tether-shepherd', '1.8.1');
  }
};
