import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { builtInButtons } from '../../data';

const steps = [
  {
    id: 'intro',
    options: {
      attachTo: {
        element: '.test-element',
        on: 'bottom'
      },
      buttons: [builtInButtons.cancel, builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      title: 'Welcome to Ember-Shepherd!',
      text: 'Test text',
      scrollTo: true,
      scrollToHandler() {
        return 'custom scrollToHandler';
      }
    }
  }
];

module('Unit | Service | tour', function (hooks) {
  setupTest(hooks);

  test('it starts the tour when the `start` event is triggered', function (assert) {
    assert.expect(1);

    class mockTourObject extends EmberObject {
      start() {
        assert.ok(true, 'The tour was started');
      }
    }

    const service = this.owner.factoryFor('service:tour').create({
      steps
    });

    service.set('tourObject', mockTourObject.create());

    run(function () {
      service.start();
    });
  });

  test('it allows another object to bind to events', function (assert) {
    assert.expect(1);

    class mockTourObject extends EmberObject {
      next() {}
    }

    const service = this.owner.factoryFor('service:tour').create({
      steps
    });

    service.set('tourObject', mockTourObject.create());

    service.on('next', function () {
      assert.ok(true);
    });

    run(function () {
      service.next();
    });
  });

  test('it passes through a custom scrollToHandler option', function (assert) {
    assert.expect(1);

    class mockTourObject extends EmberObject {
      start() {
        assert.equal(
          steps[0].options.scrollToHandler(),
          'custom scrollToHandler',
          'The handler was passed through as an option on the step'
        );
      }
    }

    const service = this.owner.factoryFor('service:tour').create({
      steps
    });

    service.set('tourObject', mockTourObject.create());

    run(function () {
      service.start();
    });
  });
});
