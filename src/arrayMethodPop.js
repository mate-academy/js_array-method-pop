'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const arrayLength = this.length;
    if (arrayLength === 0) {
      return undefined;
    }
    const item = this[arrayLength - 1];
    this.length = arrayLength - 1;
    return item;
  };
}

module.exports = applyCustomPop;
