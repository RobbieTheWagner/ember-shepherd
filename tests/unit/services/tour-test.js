import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { on, run } = Ember;

const steps = [
  {
    id: 'intro',
    options: {
      attachTo: '.test-element bottom',
      builtInButtons: [
        {
          classes: 'shepherd-button-secondary',
          text: 'Exit',
          type: 'cancel'
        },
        {
          classes: 'shepherd-button-primary',
          text: 'Next',
          type: 'next'
        }
      ],
      classes: 'shepherd shepherd-open shepherd-theme-arrows shepherd-transparent-text',
      copyStyles: false,
      title: 'Welcome to Ember-Shepherd!',
      text: ['Test text']
    }
  }
];

moduleFor('service:tour', 'Unit | Service | tour', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

// Replace this with your real tests.
test('it starts the tour when the `start` event is triggered', function(assert) {
  assert.expect(1);

  var mockTourObject = Ember.Object.extend({
    start() {
      assert.ok(true, 'The tour was started');
    }
  }).create();

  var service = this.subject({
    steps,
    _tourObject: mockTourObject
  });

  run(function() {
    service.trigger('start');
  });
});

test('it allows another object to bind to events', function(assert) {
  assert.expect(2);

  var mockTourObject = Ember.Object.extend({
    start() {
      assert.ok(true, 'The tour was started');
    }
  }).create();

  var service = this.subject({
    steps,
    _tourObject: mockTourObject
  });

  var someClass = Ember.Object.extend({
    tour: service,

    testOnInit: on('init', function() {
      var tour = this.get('tour');
      tour.on('start', function() {
        assert.ok(true, 'The `start` event was observed from the init hook');
      });
    }),

    tourDidStart: on('tour.start', function() {
      // TODO: Is it possible to get this kind of event binding to work as well?
      assert.ok(true, 'The `start` event was observed using the `on` helper');
    })
  }).create();

  run(function() {
    service.trigger('start');
  });
});
