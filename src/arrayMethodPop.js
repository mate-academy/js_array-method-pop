'use strict';

/**
 * Implement method pop
 */

function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastItem = this[this.length - 1];
    if (this.length === 0) {
      return undefined;
    }
    this.length--;
    return lastItem;
  };
}

module.exports = applyCustomPop;
