'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const poppedElement = this[this.length - 1];

    if (this.length !== 0) {
      this.length = this.length - 1;
    } else {
      return undefined;
    }

    return poppedElement;
  };
}

module.exports = applyCustomPop;
