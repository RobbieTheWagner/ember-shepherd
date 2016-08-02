import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';

const { Object: EmberObject, run } = Ember;

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

test('it starts the tour when the `start` event is triggered', function(assert) {
  assert.expect(1);

  let mockTourObject = EmberObject.extend({
    start() {
      assert.ok(true, 'The tour was started');
    }
  }).create();

  let service = this.subject({
    steps
  });

  service.set('tourObject', mockTourObject);

  run(function() {
    service.start();
  });
});

test('it allows another object to bind to events', function(assert) {
  assert.expect(1);

  let mockTourObject = EmberObject.extend({
    next() {}
  }).create();

  let service = this.subject({
    steps
  });

  service.set('tourObject', mockTourObject);

  service.on('next', function() {
    assert.ok(true);
  });

  run(function() {
    service.next();
  });
});
