'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    } else {
      this.length = this.length - 1;
    }
    return this.length;
  };
}

module.exports = applyCustomPop;
