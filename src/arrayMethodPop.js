'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const arrLength = this.length;
    if (arrLength === 0) {
      return undefined;
    }
    const lastItem = this[arrLength - 1];
    this.length -= 1;
    return lastItem;
  };
}

module.exports = applyCustomPop;
