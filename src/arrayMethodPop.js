'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastIndex = this[this.length - 1];
    if (this.length) {
      this.length--;
      return lastIndex;
    }
  };
  // write code here
}
module.exports = applyCustomPop;
