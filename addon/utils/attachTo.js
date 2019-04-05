/**
 * Check if attachTo is an object, if it is, put element and on into a string,
 * if it is already a string, just return that string
 *
 * @function normalizeAttachTo
 * @param {object|string} [attachTo]
 * @private
 * @return {*}
 */
export function normalizeAttachTo(attachTo) {
  if (attachTo && typeof attachTo.element === 'string' && typeof attachTo.on === 'string') {
    return `${attachTo.element} ${attachTo.on}`;
  } else {
    return attachTo;
  }
}
