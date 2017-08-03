module.exports = {
  env: {
    embertest: true
  },
  plugins: ['ember'],
  rules: {
    'no-console': 'off',
    'ember/named-functions-in-promises': 'off',
    'ember/use-ember-get-and-set': 'off'
  }
};
