'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (this.length < 1) {
      return undefined;
    }
    const removeElement = this[this.length - 1];
    this.length -= 1;
    return removeElement;
  };
}

module.exports = applyCustomPop;
