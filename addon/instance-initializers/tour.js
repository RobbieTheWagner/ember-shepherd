export function initialize(instance) {
  const { container } = instance;
  const service = container.lookup('service:tour');
  const appController = container.lookup('controller:application');
  service.set('_applicationController', appController);
}

export default {
  name: 'tour',
  initialize
};
