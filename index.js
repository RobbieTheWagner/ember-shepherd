'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: 'ember-shepherd',
  included(app) {
    let theme = 'css/shepherd-theme-';
    if (app.options && app.options.shepherd && app.options.shepherd.theme) {
      theme += app.options.shepherd.theme;
    } else {
      theme += 'arrows';
    }
    theme += '.css';

    this.theme = theme;

    this._super.included.apply(this, arguments);
  },
  options: {
    nodeAssets: {
      'disable-scroll'() {
        return {
          srcDir: 'dist',
          import: {
            include: [
              'disable-scroll.js'
            ],
            processTree(tree) {
              return fastbootTransform(tree);
            }
          }
        };
      },
      'tether-shepherd'() {
        return {
          srcDir: 'dist',
          import: {
            include: [
              'js/shepherd.js',
              this.theme
            ],
            processTree(tree) {
              return fastbootTransform(tree);
            }
          }
        };
      }
    }
  }
};
