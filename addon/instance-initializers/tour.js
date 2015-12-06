export function initialize(instance) {
  const service = instance.lookup('service:tour');
  const appController = instance.lookup('controller:application');
  service.set('applicationController', appController);
}

export default {
  name: 'tour',
  initialize
};
