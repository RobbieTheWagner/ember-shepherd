import Ember from 'ember';

export default Ember.Service.extend({
  classes: 'shepherd-theme-arrows',
  scrollTo: false,
  showCancelLink: true,
  attachToSlug: '.tour-step-',

  activeTour: null,
  tours: [],
  steps: [],

  createTour: function (name, steps, options = {}) {
    if (options.classes === undefined) { options.classes = this.get('classes'); }
    if (options.scrollTo === undefined) { options.scrollTo = this.get('scrollTo'); }
    if (options.showCancelLink === undefined) { options.showCancelLink = this.get('showCancelLink'); }

    this.get('tours').push({
      name: name,
      steps: steps,
      options: options
    });
  },

  createStep: function (name, options = {}, position = 'bottom') {
    if (typeof options === 'string') {
      options = { text: options };
    }

    if (options.attachTo === undefined) {
      options.attachTo = this.get('attachToSlug') + name + ' ' + position;
    }

    this.get('steps').push({
      name: name,
      options: options});
  },

  cancelTour: function () {
    var tour = this.get('tourObj');
    if (tour) { tour.cancel(); }
  }
});
