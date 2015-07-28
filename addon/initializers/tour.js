export function initialize(container, application) {
  application.inject('route', 'tour', 'service:tour');
  application.inject('controller', 'tour', 'service:tour');
}

export default {
  name: 'tour',
  initialize: initialize
};
