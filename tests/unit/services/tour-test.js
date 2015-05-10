import Ember from 'ember';
import { moduleFor, test } from 'ember-qunit';
import { skip } from 'qunit';

var steps = [
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

var mockTourObject = Ember.Object.createWithMixins(Ember.Evented, {
  start() {
    this.trigger('start');
  }
});

moduleFor('service:tour', {
  afterEach() {
    // Remove start actions
    mockTourObject.off('start');
  }
});

// Replace this with your real tests.
test('it starts the tour when the `start` event is triggered', function(assert) {
  assert.expect(1);

  mockTourObject.on('start', function() {
    assert.ok(true, 'This tour was started');
  });

  var service = this.subject({
    steps: steps,
    _tourObject: mockTourObject
  });

  Ember.run(function() {
    service.trigger('start');
  });

});

skip('attachTo works with object when element is string', function(assert) {
  assert.expect(1);

  // Render some DOM do create an element to find
  Ember.run(function() {
    const view = Ember.View.create({
      template: Ember.Handlebars.compile('<div class=".test-object">test</div>')
    });
    view.appendTo('#qunit-fixture');
  });

  const service = this.subject({});
  const step = {
    options: {
      attachTo: {
        element: '.text-object'
      }
    }
  };
  const element = service._getElementForStep(step);
});

skip('attachTo works with object when element is DOM object', function(assert) {

});
