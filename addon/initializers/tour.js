export function initialize(container, application) {
  application.inject('route', 'tour', 'service:tour');
}

export default {
  name: 'tour',
  initialize: initialize
};
