import { moduleFor, test } from 'ember-qunit';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';

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
      text: ['Test text'],
      scrollTo: true,
      scrollToHandler() {
        return 'custom scrollToHandler';
      }
    }
  }
];

moduleFor('service:tour', 'Unit | Service | tour', {
  // Specify the other units that are required for this test.
  // needs: ['service:foo']
});

test('it starts the tour when the `start` event is triggered', function(assert) {
  assert.expect(1);

  const mockTourObject = EmberObject.extend({
    start() {
      assert.ok(true, 'The tour was started');
    }
  }).create();

  const service = this.subject({
    steps
  });

  service.set('tourObject', mockTourObject);

  run(function() {
    service.start();
  });
});

test('it allows another object to bind to events', function(assert) {
  assert.expect(1);

  const mockTourObject = EmberObject.extend({
    next() {}
  }).create();

  const service = this.subject({
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

test('it passes through a custom scrollToHandler option', function(assert) {
  assert.expect(1);

  const mockTourObject = EmberObject.extend({
    start() {
      assert.equal(steps[0].options.scrollToHandler(), 'custom scrollToHandler', 'The handler was passed through as an option on the step');
    }
  }).create();

  const service = this.subject({
    steps
  });

  service.set('tourObject', mockTourObject);

  run(function() {
    service.start();
  });
});

test('it correctly calculates element position from getElementPosition', function(assert) {
  assert.expect(2);

  const service = this.subject({
    steps
  });

  const mockElement = { offsetHeight: 500, offsetLeft: 200, offsetTop: 100, offsetWidth: 250 };
  const position = service._getElementPosition(mockElement);

  assert.equal(position.top, '100', 'Top is correctly calculated');
  assert.equal(position.left, '200', 'Left is correctly calculated');
});
