'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (this.length === 0) {
      return undefined;
    }
    const lastElem = this[this.length - 1];
    delete this[this.length - 1];
    this.length -= 1;
    return lastElem;
  };
}

module.exports = applyCustomPop;
