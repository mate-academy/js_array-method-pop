'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length < 1) {
      return undefined;
    } else {
      this.length--;
      return this.length;
    }
  };
}

module.exports = applyCustomPop;
