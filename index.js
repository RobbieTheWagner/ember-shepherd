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

    const app = this._findHost();
    let assetDir = path.join(this.project.root, 'vendor', 'jquery-disablescroll');
    console.log(assetDir);

    if (existsSync(assetDir)) {
      const browserTrees = fastbootTransform(new Funnel(assetDir, {
        files: ['jquery.disablescroll.js'],
      }));
      trees.push(browserTrees);
    }

    return new Merge(trees);
  },

  included(app) {
    let theme = 'css/shepherd-theme-';
    if (app.options && app.options.shepherd && app.options.shepherd.theme) {
      theme += app.options.shepherd.theme;
    } else {
      theme += 'arrows'
    }
    theme += '.css';

    this.theme = theme;

    this.app.import('vendor/jquery.disablescroll.js');

    this._super.included.apply(this, arguments);
  },

  options: {
    nodeAssets: {
      'tether-shepherd': function() {
        return {
          srcDir: 'dist',
          import: [
            'js/shepherd.js',
            this.theme
          ]
        };
      }
    }
  }
};
