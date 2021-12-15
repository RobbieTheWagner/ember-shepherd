import { makeButton } from 'ember-shepherd/utils/buttons';
import { module, test } from 'qunit';

module('Unit | Utility | make-button', function () {
  module('Making an `action` handler for Shepherd button types', function () {
    test('returning an object with an `action` handler if a supported built-in button "type" is specified', async function (assert) {
      assert.expect(3);

      const context = {
        next() {
          assert.ok(true, 'Action was called in calling context');
        },
      };

      const buttonOpts = {
        type: 'next',
        classes: 'foo',
        text: 'Suivant!',
      };

      const button = makeButton.call(context, buttonOpts);

      assert.strictEqual(button.classes, buttonOpts.classes);
      assert.strictEqual(button.text, buttonOpts.text);

      button.action();
    });

    test('Throwing an error if the built-in button "type" specified is not supported', async function (assert) {
      const badButtonOpts = {
        type: 'cipher',
        classes: 'foo',
        text: 'Encrypt',
      };
      const goodButtonOpts = {
        type: 'next',
        classes: 'foo',
        text: 'Encrypt',
      };

      assert.throws(() => makeButton(badButtonOpts));

      assert.strictEqual(makeButton(goodButtonOpts).text, goodButtonOpts.text);
      assert.strictEqual(
        makeButton(goodButtonOpts).classes,
        goodButtonOpts.classes
      );
    });
  });
});
