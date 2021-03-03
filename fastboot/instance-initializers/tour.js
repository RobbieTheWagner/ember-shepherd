import { Promise } from 'rsvp';

function patchTourServiceNoop(instance) {
  const tour = instance.lookup('service:tour');
  tour.addSteps = function () {
    return Promise.resolve();
  };
  tour.back = function () {};
  tour.cancel = function () {};
  tour.hide = function () {};
  tour.next = function () {};
  tour.show = function () {};
  tour.start = function () {};
  tour._cleanup = function () {};
}

export default {
  name: 'tour',
  initialize: patchTourServiceNoop
};
