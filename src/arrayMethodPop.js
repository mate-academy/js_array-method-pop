'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 0) {
      const result = this[this.length - 1]; // array[array.length - 1]
      this.length = this.length - 1;
      return result;
    }
    return undefined;
  };
}

module.exports = applyCustomPop;
