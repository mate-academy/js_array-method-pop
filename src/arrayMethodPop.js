'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length) {
      const lastElement = this[this.length - 1];

      this.length -= 1;

      return lastElement;
    } else {
      return undefined;
    }
  };
}

module.exports = applyCustomPop;
