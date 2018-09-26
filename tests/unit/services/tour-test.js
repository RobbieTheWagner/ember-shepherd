import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { builtInButtons } from '../../data';

const steps = [
  {
    id: 'intro',
    options: {
      attachTo: '.test-element bottom',
      buttons: [
        builtInButtons.cancel,
        builtInButtons.next,
      ],
      classes: 'custom-class-name-1 custom-class-name-2',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Test text'],
      scrollTo: true,
      scrollToHandler() {
        return 'custom scrollToHandler';
      }
    }
  }
];

module('Unit | Service | tour', function(hooks) {
  setupTest(hooks);

  test('it starts the tour when the `start` event is triggered', function(assert) {
    assert.expect(1);

    const mockTourObject = EmberObject.extend({
      start() {
        assert.ok(true, 'The tour was started');
      }
    }).create();

    const service = this.owner.factoryFor('service:tour').create({
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

    const service = this.owner.factoryFor('service:tour').create({
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

    const service = this.owner.factoryFor('service:tour').create({
      steps
    });

    service.set('tourObject', mockTourObject);

    run(function() {
      service.start();
    });
  });
});
