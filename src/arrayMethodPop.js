'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const arrayFunc = this;
    const length = arrayFunc.length;
    if (length === 0) {
      return undefined;
    }
    const element = arrayFunc[length - 1];
    this.length -= 1;
    return element;
  };
}

module.exports = applyCustomPop;
