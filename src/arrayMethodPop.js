'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const length = this.length;

    if (length === 0) {
      return undefined;
    }

    const lastItem = this[length - 1];

    this.length = length - 1;

    return lastItem;
  };
}

module.exports = applyCustomPop;
