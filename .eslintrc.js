module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/base',
    'plugin:ember-suave/recommended'
  ],
  env: {
    browser: true
  },
  globals: {
    Shepherd: false
  },
  rules: {
    'prefer-const': 'error',

    'ember/alias-model-in-controller': 'off',
    'ember/no-old-shims': 'error',
    'ember-suave/no-const-outside-module-scope': 0
  }
};
