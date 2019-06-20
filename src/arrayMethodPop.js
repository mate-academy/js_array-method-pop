'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastValue = this[this.length - 1];

    if (lastValue) {
      this.length = this.length - 1;
    }
    return lastValue;
  };
}

module.exports = applyCustomPop;
