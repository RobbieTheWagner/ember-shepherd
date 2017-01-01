module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ship-shape/recommended'
  ],
  env: {
    'browser': true
  },
  globals: {
    'Shepherd': false
  },
  rules: {
  }
};
