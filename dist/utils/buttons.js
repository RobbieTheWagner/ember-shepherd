import { bind } from '@ember/runloop';
import { assert } from '@ember/debug';
import 'shepherd.js';

/* eslint-disable ember/no-runloop */
/**
 * Creates a button of the specified type, with the given classes and text
 *
 * @function makeButton
 * @param {object} [button] Description here
 * @param {string} [button.type] The type of button cancel, back, or next
 * @param {classes} [button.classes] Classes to apply to the button
 * @param {string} [button.text] The text for the button
 * @param {action} [button.action] The action to call
 * @private
 * @return {{action: *, classes: *, text: *}} Description here
 */
function makeButton(button) {
  const {
    classes,
    disabled,
    label,
    secondary,
    text,
    type
  } = button;
  const builtInButtonTypes = ['back', 'cancel', 'next'];
  if (!type) {
    return button;
  }
  assert(`'type' property must be one of 'back', 'cancel', or 'next'`, builtInButtonTypes.includes(type));
  const action = bind(this, function () {
    void this[type]();
  });
  return {
    action,
    classes,
    disabled,
    label,
    secondary,
    text,
    type
  };
}

export { makeButton };
//# sourceMappingURL=buttons.js.map
