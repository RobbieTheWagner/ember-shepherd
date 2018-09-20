

/**
 * Helper method to check if element is hidden, since we cannot use :visible without jQuery
 * @param {HTMLElement} element The element to check for visibility
 * @returns {boolean} true if element is hidden
 * @private
 */
function elementIsHidden(element) {
  return element.offsetWidth === 0 && element.offsetHeight === 0;
}

/**
 * Get the element from an option object
 *
 * @method getElementFromObject
 * @param Object attachTo
 * @returns {Element}
 * @private
 */
function getElementFromObject(attachTo) {
  const op = attachTo.element;

  if (op instanceof HTMLElement) {
    return op;
  }

  return document.querySelector(op);
}

/**
 * Return the element for a step
 *
 * @method getElementForStep
 * @param step step the step to get an element for
 * @returns {Element} the element for this step
 * @private
 */
function getElementForStep(step) {
  const { options: { attachTo } } = step;

  if (!attachTo) {
    return null;
  }

  const type = typeof attachTo;

  let element;

  if (type === 'string') {
    element = getElementFromString(attachTo);
  } else if (type === 'object') {
    element = getElementFromObject(attachTo);
  } else {
    /* istanbul ignore next: cannot test undefined attachTo, but it does work! */
    element = null;
  }
  return element;
}

/**
 * Get the element from an option string
 *
 * @method getElementFromString
 * @param element the string in the step configuration
 * @returns {Element} the element from the string
 * @private
 */
function getElementFromString(element) {
  const attachTo = element.split(' ');

  attachTo.pop();
  const selector = attachTo.join(' ');

  return document.querySelector(selector);
}


/**
 * Remove any leftover .shepherd-modal classes and add the .shepherd-modal class to the currentElement
 * @param {HTMLElement} currentElement The element for the current step
 */
function toggleShepherdModalClass(currentElement) {
  const shepherdModal = document.querySelector('.shepherd-modal');

  if (shepherdModal) {
    shepherdModal.classList.remove('shepherd-modal');
  }

  currentElement.classList.add('shepherd-modal');
}

export {
  elementIsHidden,
  getElementForStep,
  toggleShepherdModalClass,
};
