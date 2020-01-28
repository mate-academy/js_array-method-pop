'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const popedElement = this[this.length - 1];

    if (popedElement !== undefined) {
      this.length -= 1;
    }

    return popedElement;
  };
}

module.exports = applyCustomPop;
