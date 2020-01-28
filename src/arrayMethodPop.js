'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const poppedElement = this[this.length - 1];

    if (poppedElement !== undefined) {
      this.length -= 1;
    }

    return poppedElement;
  };
}

module.exports = applyCustomPop;
