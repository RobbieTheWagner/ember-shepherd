import Ember from 'ember';
import layout from '../templates/components/onboard-list';

export default Ember.Component.extend({
  layout: layout,

  tagName: '',
  classNames: ['sticky-list-container'],

  title: 'How can we help?',
  intro: 'choose the tour',
  textForNullList: 'no tour here',

  titleClass: '',
  introClass: '',
  ulClass: '',
  liClass: '',

  onboard: Ember.inject.service(),
  defaultList: Ember.computed.alias('onboard.defaultList'),
  currentList: Ember.computed.alias('onboard.currentList'),

  currentListTours: Ember.computed('defaultList', 'currentList', function () {
    var currentList = this.get('currentList');
    if (currentList) { return currentList; }

    var defaultList = this.get('defaultList');
    if (defaultList) { return defaultList; }

    return null;
  }),

  actions: {
    setTour: function (tourName) {
      this.set('onboard.activeTour', tourName);
      this.set('onboard.isStickyOpen', false);
    }
  }
});
