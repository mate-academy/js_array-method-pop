'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return undefined;
    } else {
      const result = this[this.length - 1];
      this.length -= 1;
      return result;
    }
  };
}

module.exports = applyCustomPop;
