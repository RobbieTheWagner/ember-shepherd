export function initialize(container) {
  // Give the Tour service a reference to the Application Controller so it can
  // get the current path information
  const service = container.lookup('service:tour');
  const appController = container.lookup('controller:application');
  service.set('_applicationController', appController);
}

export default {
  name: 'tour',
  initialize: initialize
};
