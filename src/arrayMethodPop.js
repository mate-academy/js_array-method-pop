'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const result = this[this.length - 1];

    if (this.length) {
      this.length = this.length - 1;
      return result;
    }

    return undefined;
  };
}

module.exports = applyCustomPop;
