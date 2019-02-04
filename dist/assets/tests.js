'use strict';

define("dummy/tests/acceptance/ember-shepherd-test", ["qunit", "@ember/test-helpers", "ember-qunit", "dummy/tests/data"], function (_qunit, _testHelpers, _emberQunit, _data) {
  "use strict";

  const toggleTour = async (tour, modal) => {
    tour.set('modal', modal);
    tour.addSteps(_data.steps);
    return await tour.start();
  };

  (0, _qunit.module)('Acceptance | Tour functionality tests', function (hooks) {
    let tour;
    (0, _emberQunit.setupApplicationTest)(hooks);
    hooks.beforeEach(function () {
      tour = this.owner.lookup('service:tour');
      tour.set('confirmCancel', false);
      tour.set('modal', true);
    });
    hooks.afterEach(async function () {
      return await tour.complete();
    });
    (0, _qunit.module)('Cancel link', function () {
      (0, _qunit.test)('Shows cancel link', async function (assert) {
        await (0, _testHelpers.visit)('/');
        await toggleTour(tour, true);
        const cancelLink = document.querySelector('.shepherd-cancel-link');
        assert.ok(cancelLink, 'Cancel link shown');
      });
      (0, _qunit.test)('Hides cancel link', async function (assert) {
        const defaultStepOptions = {
          classes: 'shepherd-theme-arrows test-defaults',
          showCancelLink: false
        };
        const steps = [{
          id: 'step-without-cancel-link',
          options: {
            attachTo: '.first-element bottom',
            buttons: [_data.builtInButtons.cancel, _data.builtInButtons.next],
            showCancelLink: false
          }
        }];
        await (0, _testHelpers.visit)('/');
        tour.set('defaultStepOptions', defaultStepOptions);
        tour.addSteps(steps);
        tour.start();
        assert.notOk(document.querySelector('.shepherd-element a.shepherd-cancel-link'));
      });
      (0, _qunit.test)('Cancel link cancels the tour', async function (assert) {
        await (0, _testHelpers.visit)('/');
        await toggleTour(tour, true);
        assert.ok(document.body.classList.contains('shepherd-active'), 'Body has class of shepherd-active, when shepherd becomes active');
        await (0, _testHelpers.click)(document.querySelector('.shepherd-content a.shepherd-cancel-link'));
        assert.notOk(document.body.classList.contains('shepherd-active'), 'Body does not have class of shepherd-active, when shepherd becomes inactive');
      });
    });
    (0, _qunit.module)('Required Elements', function () {
      (0, _qunit.test)('Not warning about required elements when none are specified', async function (assert) {
        await (0, _testHelpers.visit)('/');
        await toggleTour(tour, true);
        const currentStepId = document.body.getAttribute('data-shepherd-step');
        assert.equal(currentStepId, _data.steps[0].id);
      });
      (0, _qunit.test)('Not warning about required elements when none are missing', async function (assert) {
        const requiredElements = [{
          selector: 'body',
          message: 'Body element not found 🤔',
          title: 'Error'
        }];
        tour.set('requiredElements', requiredElements);
        await (0, _testHelpers.visit)('/');
        await toggleTour(tour, true);
        const currentStepId = document.body.getAttribute('data-shepherd-step');
        assert.equal(currentStepId, _data.steps[0].id);
      });
      (0, _qunit.test)('Warning about missing required elements when all are present', async function (assert) {
        const requiredElements = [{
          selector: '👻',
          message: '👻 element not found',
          title: 'Missing Required Elements'
        }];
        tour.set('requiredElements', requiredElements);
        await (0, _testHelpers.visit)('/');
        await toggleTour(tour, true);
        const currentStepId = document.body.getAttribute('data-shepherd-step');
        assert.equal(currentStepId, 'error');
      });
    });
    (0, _qunit.module)('Tour options', function () {
      (0, _qunit.test)('Defaults applied', async function (assert) {
        assert.expect(1);
        const stepsWithoutClasses = [{
          id: 'test-highlight',
          options: {
            attachTo: '.first-element bottom',
            buttons: [_data.builtInButtons.cancel, _data.builtInButtons.next]
          }
        }];
        await (0, _testHelpers.visit)('/');
        tour.addSteps(stepsWithoutClasses);
        tour.start();
        assert.ok(document.querySelector('.custom-default-class'), 'defaults class applied');
      });
      (0, _qunit.test)('configuration works with attachTo object when element is a simple string', async function (assert) {
        assert.expect(1);
        const steps = [{
          id: 'test-attachTo-string',
          options: {
            attachTo: {
              element: '.first-element',
              on: 'bottom'
            },
            buttons: [_data.builtInButtons.cancel, _data.builtInButtons.next]
          }
        }];
        tour.addSteps(steps);
        await (0, _testHelpers.visit)('/');
        tour.start();
        assert.ok(document.querySelector('.shepherd-element'), 'tour is visible');
      });
      (0, _qunit.test)('configuration works with attachTo object when element is dom element', async function (assert) {
        assert.expect(1);
        await (0, _testHelpers.visit)('/');
        const steps = [{
          id: 'test-attachTo-dom',
          options: {
            attachTo: {
              element: (0, _testHelpers.find)('.first-element'),
              on: 'bottom'
            },
            buttons: [_data.builtInButtons.cancel, _data.builtInButtons.next]
          }
        }];
        tour.addSteps(steps);
        tour.start();
        assert.ok(document.querySelector('.shepherd-element'), 'tour is visible');
      });
      (0, _qunit.test)('buttons work when type is not specified and passed action is triggered', async function (assert) {
        assert.expect(4);
        let buttonActionCalled = false;
        const steps = [{
          id: 'test-buttons-custom-action',
          options: {
            attachTo: {
              element: '.first-element',
              on: 'bottom'
            },
            buttons: [{
              classes: 'shepherd-button-secondary button-one',
              text: 'button one'
            }, {
              classes: 'shepherd-button-secondary button-two',
              text: 'button two',

              action() {
                buttonActionCalled = true;
              }

            }, {
              classes: 'shepherd-button-secondary button-three',
              text: 'button three'
            }]
          }
        }];
        await (0, _testHelpers.visit)('/');
        tour.addSteps(steps);
        await tour.start();
        assert.ok(document.querySelector('.button-one'), 'tour button one is visible');
        assert.ok(document.querySelector('.button-two'), 'tour button two is visible');
        assert.ok(document.querySelector('.button-three'), 'tour button three is visible');
        await (0, _testHelpers.click)(document.querySelector('.button-two'));
        assert.ok(buttonActionCalled, 'button action triggered');
      });
      (0, _qunit.test)('scrollTo works with disableScroll on', async function (assert) {
        assert.expect(2); // Setup controller tour settings

        tour.set('disableScroll', true);
        tour.set('scrollTo', true); // Visit route

        await (0, _testHelpers.visit)('/');
        document.querySelector('#ember-testing-container').scrollTop = 0;
        assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');
        await tour.start();
        await (0, _testHelpers.click)(document.querySelector('.shepherd-content .next-button'));
        await (0, _testHelpers.click)(document.querySelector('.shepherd-content .next-button'));
        assert.ok(document.querySelector('#ember-testing-container').scrollTop > 0, 'Scrolled down correctly');
      });
      (0, _qunit.test)('scrollTo works with a custom scrollToHandler', async function (assert) {
        assert.expect(2);
        const done = assert.async(); // Override default behavior

        const steps = [{
          id: 'intro',
          options: {
            attachTo: '.first-element bottom',
            buttons: [_data.builtInButtons.cancel, _data.builtInButtons.next],
            scrollTo: true,

            scrollToHandler() {
              document.querySelector('#ember-testing-container').scrollTop = 120;
              assert.equal(document.querySelector('#ember-testing-container').scrollTop, 120, 'Scrolled correctly');
              done();
            }

          }
        }]; // Visit route

        await (0, _testHelpers.visit)('/');
        tour.addSteps(steps);
        document.querySelector('#ember-testing-container').scrollTop = 0;
        assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');
        await tour.start();
        await (0, _testHelpers.click)(document.querySelector('.shepherd-content .next-button'));
      });
      (0, _qunit.test)('scrollTo works without a custom scrollToHandler', async function (assert) {
        assert.expect(2); // Setup controller tour settings

        tour.set('scrollTo', true); // Visit route

        await (0, _testHelpers.visit)('/');
        document.querySelector('#ember-testing-container').scrollTop = 0;
        assert.equal(document.querySelector('#ember-testing-container').scrollTop, 0, 'Scroll is initially 0');
        await tour.start();
        await (0, _testHelpers.click)(document.querySelector('.shepherd-content .next-button'));
        assert.ok(document.querySelector('#ember-testing-container').scrollTop > 0, 'Scrolled correctly');
      });
      (0, _qunit.test)('Show by id works', async function (assert) {
        assert.expect(1);
        await (0, _testHelpers.visit)('/');
        tour.show('usage');
        assert.equal(tour.get('tourObject').currentStep.el.querySelector('.shepherd-text').textContent, 'To use the tour service, simply inject it into your application and use it like this example.', 'Usage step shown');
      });
      (0, _qunit.test)('hide method hides the current step', async function (assert) {
        assert.expect(1);
        await (0, _testHelpers.visit)('/');
        tour.show('usage');
        tour.hide();
        assert.equal(tour.get('tourObject').currentStep.isOpen(), false, 'The step is hidden');
      });
    });
  });
});
define("dummy/tests/data", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.steps = _exports.defaultStepOptions = _exports.builtInButtons = void 0;
  const builtInButtons = {
    cancel: {
      classes: 'shepherd-button-secondary cancel-button',
      text: 'Exit',
      type: 'cancel'
    },
    next: {
      classes: 'shepherd-button-primary next-button',
      text: 'Next',
      type: 'next'
    },
    back: {
      classes: 'shepherd-button-primary back-button',
      text: 'Back',
      type: 'back'
    }
  };
  _exports.builtInButtons = builtInButtons;
  const defaultStepOptions = {
    classes: 'shepherd-theme-arrows custom-default-class',
    scrollTo: true,
    showCancelLink: true,
    tippyOptions: {
      duration: 500
    }
  };
  _exports.defaultStepOptions = defaultStepOptions;
  const steps = [{
    id: 'intro',
    options: {
      attachTo: '.first-element bottom',
      buttons: [builtInButtons.cancel, builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      title: 'Welcome to Ember Shepherd!',
      text: [`
          Ember Shepherd is a JavaScript library for guiding users through your Ember app.
          It is an Ember addon that wraps <a href="https://github.com/shipshapecode/shepherd">Shepherd</a>
          and extends its functionality. Shepherd uses <a href="https://atomiks.github.io/tippyjs/">Tippy.js</a>,
          another open source library, to position all of its steps and enable entrance and exit animations.
        `, `
          Tippy makes sure your steps never end up off screen or cropped by an
          overflow. Try resizing your browser to see what we mean.
        `]
    }
  }, {
    id: 'installation',
    options: {
      attachTo: '.install-element bottom',
      buttons: [builtInButtons.cancel, builtInButtons.back, builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      title: 'Installation',
      text: ['Installation is simple, if you are using Ember-CLI, just install like any other addon.']
    }
  }, {
    id: 'usage',
    options: {
      attachTo: '.usage-element bottom',
      buttons: [builtInButtons.cancel, builtInButtons.back, builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      title: 'Usage',
      text: ['To use the tour service, simply inject it into your application and use it like this example.']
    }
  }, {
    id: 'modal',
    options: {
      attachTo: {
        element: '.modal-element',
        on: 'top'
      },
      buttons: [builtInButtons.cancel, builtInButtons.back, builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: ['We implemented true modal functionality by disabling clicking of the rest of the page.', 'If you would like to enable modal, simply do this.get(\'tour\').set(\'modal\', true).']
    }
  }, {
    id: 'buttons',
    options: {
      attachTo: '.built-in-buttons-element top',
      buttons: [builtInButtons.cancel, builtInButtons.back, builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: [`For the common button types ("next", "back", "cancel", etc.), we implemented Ember actions
          that perform these actions on your tour automatically. To use them, simply include
          in the buttons array in each step.`]
    }
  }, {
    id: 'disableScroll',
    options: {
      attachTo: '.disable-scroll-element top',
      buttons: [builtInButtons.cancel, builtInButtons.back, builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      text: [`When navigating the user through a tour, you may want to disable scrolling, so they
          cannot mess up your carefully planned out, amazing tour. This is now easily achieved
          with this.get('tour').set('disableScroll', true).`, 'Try scrolling right now, then exit the tour and see that you can again!']
    }
  }, {
    id: 'noAttachTo',
    options: {
      buttons: [builtInButtons.cancel, builtInButtons.back],
      title: 'Centered Modals',
      classes: 'custom-class-name-1 custom-class-name-2',
      text: ['If no attachTo is specified, the modal will appear in the center of the screen, as per the Shepherd docs.']
    }
  }];
  _exports.steps = steps;
});
define("dummy/tests/helpers/resolver", ["exports", "dummy/resolver", "dummy/config/environment"], function (_exports, _resolver, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };
  var _default = resolver;
  _exports.default = _default;
});
define("dummy/tests/lint/app.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | app');
  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });
  QUnit.test('controllers/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass ESLint\n\n');
  });
  QUnit.test('data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'data.js should pass ESLint\n\n');
  });
  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });
  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });
  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define("dummy/tests/lint/styles/app.stylelint-test", [], function () {
  "use strict";

  QUnit.module('Stylelint');
  QUnit.test('styles/app.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/app.scss should pass stylelint');
  });
});
define("dummy/tests/lint/styles/fonts.stylelint-test", [], function () {
  "use strict";

  QUnit.module('Stylelint');
  QUnit.test('styles/fonts.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/fonts.scss should pass stylelint');
  });
});
define("dummy/tests/lint/styles/prism-ghcolors.stylelint-test", [], function () {
  "use strict";

  QUnit.module('Stylelint');
  QUnit.test('styles/prism-ghcolors.scss should pass stylelint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'styles/prism-ghcolors.scss should pass stylelint');
  });
});
define("dummy/tests/lint/templates.template.lint-test", [], function () {
  "use strict";

  QUnit.module('TemplateLint');
  QUnit.test('dummy/templates/application.hbs', function (assert) {
    assert.expect(1);
    assert.ok(true, 'dummy/templates/application.hbs should pass TemplateLint.\n\n');
  });
});
define("dummy/tests/lint/tests.lint-test", [], function () {
  "use strict";

  QUnit.module('ESLint | tests');
  QUnit.test('acceptance/ember-shepherd-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'acceptance/ember-shepherd-test.js should pass ESLint\n\n');
  });
  QUnit.test('data.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'data.js should pass ESLint\n\n');
  });
  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });
  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
  QUnit.test('unit/services/tour-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/tour-test.js should pass ESLint\n\n');
  });
  QUnit.test('unit/utils/make-button-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/utils/make-button-test.js should pass ESLint\n\n');
  });
});
define("dummy/tests/test-helper", ["dummy/app", "dummy/config/environment", "@ember/test-helpers", "ember-qunit"], function (_app, _environment, _testHelpers, _emberQunit) {
  "use strict";

  (0, _testHelpers.setApplication)(_app.default.create(_environment.default.APP));
  (0, _emberQunit.start)();
});
define("dummy/tests/unit/services/tour-test", ["qunit", "ember-qunit", "dummy/tests/data"], function (_qunit, _emberQunit, _data) {
  "use strict";

  const steps = [{
    id: 'intro',
    options: {
      attachTo: '.test-element bottom',
      buttons: [_data.builtInButtons.cancel, _data.builtInButtons.next],
      classes: 'custom-class-name-1 custom-class-name-2',
      title: 'Welcome to Ember-Shepherd!',
      text: ['Test text'],
      scrollTo: true,

      scrollToHandler() {
        return 'custom scrollToHandler';
      }

    }
  }];
  (0, _qunit.module)('Unit | Service | tour', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);
    (0, _qunit.test)('it starts the tour when the `start` event is triggered', function (assert) {
      assert.expect(1);
      const mockTourObject = Ember.Object.extend({
        start() {
          assert.ok(true, 'The tour was started');
        }

      }).create();
      const service = this.owner.factoryFor('service:tour').create({
        steps
      });
      service.set('tourObject', mockTourObject);
      Ember.run(function () {
        service.start();
      });
    });
    (0, _qunit.test)('it allows another object to bind to events', function (assert) {
      assert.expect(1);
      const mockTourObject = Ember.Object.extend({
        next() {}

      }).create();
      const service = this.owner.factoryFor('service:tour').create({
        steps
      });
      service.set('tourObject', mockTourObject);
      service.on('next', function () {
        assert.ok(true);
      });
      Ember.run(function () {
        service.next();
      });
    });
    (0, _qunit.test)('it passes through a custom scrollToHandler option', function (assert) {
      assert.expect(1);
      const mockTourObject = Ember.Object.extend({
        start() {
          assert.equal(steps[0].options.scrollToHandler(), 'custom scrollToHandler', 'The handler was passed through as an option on the step');
        }

      }).create();
      const service = this.owner.factoryFor('service:tour').create({
        steps
      });
      service.set('tourObject', mockTourObject);
      Ember.run(function () {
        service.start();
      });
    });
  });
});
define("dummy/tests/unit/utils/make-button-test", ["ember-shepherd/utils/buttons", "qunit"], function (_buttons, _qunit) {
  "use strict";

  (0, _qunit.module)('Unit | Utility | make-button', function () {
    (0, _qunit.module)('Making an `action` handler for Shepherd button types', function () {
      (0, _qunit.test)('returning an object with an `action` handler if a supported built-in button "type" is specified', async function (assert) {
        assert.expect(3);
        const context = {
          next() {
            assert.ok(true, 'Action was called in calling context');
          }

        };
        const buttonOpts = {
          type: 'next',
          classes: 'foo',
          text: 'Suivant!'
        };

        const button = _buttons.makeButton.call(context, buttonOpts);

        assert.equal(button.classes, buttonOpts.classes);
        assert.equal(button.text, buttonOpts.text);
        button.action();
      });
      (0, _qunit.test)('Throwing an error if the built-in button "type" specified is not supported', async function (assert) {
        const badButtonOpts = {
          type: 'cipher',
          classes: 'foo',
          text: 'Encrypt'
        };
        const goodButtonOpts = {
          type: 'next',
          classes: 'foo',
          text: 'Encrypt'
        };
        assert.throws(() => (0, _buttons.makeButton)(badButtonOpts));
        assert.equal((0, _buttons.makeButton)(goodButtonOpts).text, goodButtonOpts.text);
        assert.equal((0, _buttons.makeButton)(goodButtonOpts).classes, goodButtonOpts.classes);
      });
    });
  });
});
define('dummy/config/environment', [], function() {
  var prefix = 'dummy';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
