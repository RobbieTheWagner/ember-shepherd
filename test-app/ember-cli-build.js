'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const { Webpack } = require('@embroider/webpack');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    autoImport: {
      watchDependencies: ['ember-shepherd'],
    },
    'ember-cli-addon-docs': {
      documentingAddonAt: '../ember-shepherd',
    },
  });

  return require('@embroider/compat').compatBuild(app, Webpack, {
    staticAddonTrees: true,
    staticAddonTestSupportTrees: true,
    staticHelpers: true,
    staticModifiers: true,
    staticComponents: true,
    staticEmberSource: true,

    packagerOptions: {
      webpackConfig: {
        // slow, but highest fidelity
        devtool: 'source-map',
        module: {
          rules: [
            {
              test: /\.(png|svg|jpg|jpeg|gif)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
          ],
        },
      },
    },
  });
};
