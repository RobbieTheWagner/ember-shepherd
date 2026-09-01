/**
 * Helper method to check if element is hidden, since we cannot use :visible without jQuery
 *
 * @function elementIsHidden
 * @param {HTMLElement} element The element to check for visibility
 * @private
 * @return {boolean} true if element is hidden
 */
function elementIsHidden(element) {
  return element.offsetWidth === 0 && element.offsetHeight === 0;
}

export { elementIsHidden };
//# sourceMappingURL=dom.js.map
