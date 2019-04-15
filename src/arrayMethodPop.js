'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (!this.length) {
      return undefined;
    }
    const returnedElement = this[this.length - 1];
    this.length--;
    return returnedElement;
  };
}

module.exports = applyCustomPop;
