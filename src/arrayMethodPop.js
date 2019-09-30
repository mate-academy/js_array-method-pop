'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const length = this.length;
    if (length) {
      const element = this[length - 1];
      this.length -= 1;
      return element;
    }
  };
}

module.exports = applyCustomPop;
