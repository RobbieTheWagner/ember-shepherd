'use strict';

const fastbootTransform = require('fastboot-transform');

module.exports = {
  name: require('./package').name,
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
      'shepherd.js'() {
        return {
          srcDir: 'dist',
          import: {
            include: [
              'js/popper.js',
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
