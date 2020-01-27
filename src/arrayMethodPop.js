'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return undefined;
    } else {
      const lastValue = this[this.length - 1];

      this.length--;

      return lastValue;
    }
  };
}

module.exports = applyCustomPop;
