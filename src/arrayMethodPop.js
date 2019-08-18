'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    } else {
      const lastElem = this[this.length - 1];
      this.length--;
      return lastElem;
    }
  };
}

module.exports = applyCustomPop;
