'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (!this.length) {
      return undefined;
    } else {
      const elem = this[this.length - 1];
      this.length = this.length - 1;
      return elem;
    }
  };
}

module.exports = applyCustomPop;
