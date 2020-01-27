'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const removedItem = this[this.length - 1];

    if (!this.length) {
      return undefined;
    }
    this.length -= 1;

    return removedItem;
  };
}

module.exports = applyCustomPop;
