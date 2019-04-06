import AddonDocsRouter, { docsRoute } from 'ember-cli-addon-docs/router';
import config from './config/environment';

const Router = AddonDocsRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  docsRoute(this, function() {
    this.route('demo');
    this.route('faq');
    this.route('sass-variables');
    this.route('themes');
    this.route('usage');

    this.route('not-found', { path: '/*path' });
  });
});

export default Router;
