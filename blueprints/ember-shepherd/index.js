/* eslint-env node */
module.exports = {
  description: 'Adds ember-tether to consuming app',
  normalizeEntityName() {
  },
  afterInstall() {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-tether' }
      ]
    });
  }
};
