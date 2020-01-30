'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    const arrLength = this.length;

    if (!arrLength) {
      return;
    }

    const result = this[arrLength - 1];

    this.length = arrLength - 1;

    return result;
  };
}

module.exports = applyCustomPop;
