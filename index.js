/* eslint-env node */
'use strict';

const Funnel = require('broccoli-funnel');
const Merge = require('broccoli-merge-trees');
const path = require('path');
const existsSync = require('exists-sync');
const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-shepherd',

  treeForVendor(tree) {
    let trees = [];

    if (tree) {
      trees.push(tree);
    }

    let assetDir = path.join(this.treePaths.vendor, 'jquery-disablescroll');

    if (existsSync(assetDir)) {
      const browserTrees = fastbootTransform(new Funnel(assetDir, {
        files: ['jquery.disablescroll.js'],
        desDir: 'jquery'
      }));
      trees.push(browserTrees);
    }

    return new Merge(trees);
  },

  included(app) {
    let theme = '';
    if (app.options && app.options.shepherd && app.options.shepherd.theme) {
      theme += app.options.shepherd.theme;
    } else {
      theme += 'arrows'
    }

    this.theme = theme;

    this.app.import('vendor/jquery.disablescroll.js');

    this._super.included.apply(this, arguments);

  },

  options: {
    nodeAssets: {
      'tether-shepherd': function() {
        return {
          srcDir: 'dist',
          import: ['js/shepherd.js', `css/shepherd-theme-${this.theme}.css`],
          vendor: {
            include: [
              'jquery/jquery.disablescroll.js'
            ],
            processTree(tree) {
              return fastbootTransform(tree);
            }
          }
        }
      }
    }
  }
};
