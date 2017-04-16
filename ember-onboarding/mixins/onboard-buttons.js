import Ember from 'ember';

export default Ember.Mixin.create({
  buttonStart: function (tour) {
    return [
      {
        text: 'Close',
        classes: 'shepherd-button-secondary',
        action: tour.cancel
      },
      {
        text: 'Next',
        action: tour.next
      }
    ];
  },

  buttonMiddle: function (tour) {
    return [
      {
        text: 'Back',
        action: tour.back
      },
      {
        text: 'Next',
        action: tour.next
      }
    ];
  },

  buttonEnd: function (tour) {
    return [
      {
        text: 'Back',
        action: tour.back
      },
      {
        text: 'Finish',
        classes: 'shepherd-button-secondary',
        action: tour.cancel
      }
    ];
  },

  callButtonFunction: function (tour, buttonFunction, index, stepCount) {
    var buttons;
    index += 1;

    if (index === 1) {
      buttons = this.buttonStart(tour);
    } else if (index === stepCount) {
      buttons = this.buttonEnd(tour);
    } else {
      buttons = this.buttonMiddle(tour);
    }

    return { buttons: buttons };
  }
});
