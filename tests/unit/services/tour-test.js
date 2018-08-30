import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import { run } from '@ember/runloop';
import { getElementPosition, setPositionForHighlightElement } from 'ember-shepherd/utils';

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
      classes: 'shepherd shepherd-theme-arrows shepherd-transparent-text',
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

  test('it correctly calculates element position from getElementPosition', function(assert) {
    assert.expect(2);

    const mockElement = { offsetHeight: 500, offsetLeft: 200, offsetTop: 100, offsetWidth: 250 };
    const position = getElementPosition(mockElement);

    assert.equal(position.top, '100', 'Top is correctly calculated');
    assert.equal(position.left, '200', 'Left is correctly calculated');
  });

  test('it correctly sets the highlight element position', function(assert) {
    assert.expect(4);

    const currentElement = { offsetHeight: 500, offsetLeft: 200, offsetTop: 100, offsetWidth: 250 };
    const highlightElement = { style: {} };

    setPositionForHighlightElement({
      currentElement,
      highlightElement
    });

    assert.ok(highlightElement.style.left.indexOf(currentElement.offsetLeft) > -1);
    assert.ok(highlightElement.style.top.indexOf(currentElement.offsetTop) > -1);
    assert.ok(highlightElement.style.width.indexOf(currentElement.offsetWidth) > -1);
    assert.ok(highlightElement.style.height.indexOf(currentElement.offsetHeight) > -1);
  });

  test('it correctly sets the highlight element position format', function(assert) {
    assert.expect(4);

    const currentElement = { offsetHeight: 500, offsetLeft: 200, offsetTop: 100, offsetWidth: 250 };
    const highlightElement = { style: {} };

    setPositionForHighlightElement({
      currentElement,
      highlightElement
    });

    assert.ok(highlightElement.style.left.indexOf('px') > -1);
    assert.ok(highlightElement.style.top.indexOf('px') > -1);
    assert.ok(highlightElement.style.width.indexOf('px') > -1);
    assert.ok(highlightElement.style.height.indexOf('px') > -1);
  });
});
