'use strict';

module.exports = function(environment, appConfig) {
  var ENV = {};
  if (environment === 'production') {
    ENV.baseURL = '/name-of-your-repo'
  }
  return ENV;
};
