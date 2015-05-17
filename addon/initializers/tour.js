export function initialize(container, application) {
  // Give the Tour service a reference to the Application Controller so it can
  // get the current path information
  const service = container.lookup('service:tour');
  const appController = container.lookup('controller:application');
  service.set('_applicationController', appController);
  application.inject('route', 'tour', 'service:tour');
  application.inject('controller', 'tour', 'service:tour');
}

export default {
  name: 'tour',
  initialize: initialize
};
