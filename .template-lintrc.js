'use strict';

module.exports = {
  extends: 'octane',
  rules: {
    'no-curly-component-invocation': { allow: ['svg-jar'] },
    // TODO turn this back on when fixed https://github.com/ember-template-lint/ember-template-lint/issues/1135
    'no-quoteless-attributes': false
  }
};
