import Ember from 'ember';
import Application from '../../app';
import config from '../../config/environment';
import assign from 'ember-assign-polyfill';
const { run } = Ember;

export default function startApp(attrs) {
  let application;

  // use defaults, but you can override
  const attributes = assign({}, config.APP, attrs);

  run(() => {
    application = Application.create(attributes);
    application.setupForTesting();
    application.injectTestHelpers();
  });

  return application;
}
