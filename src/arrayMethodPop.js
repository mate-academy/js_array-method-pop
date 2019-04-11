'use strict';

/**
 * Implement method pop
 *
 */

function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 0) {
      const removedItem = this[this.length - 1];
      this.length -= 1;
      return removedItem;
    }
  };
}

module.exports = applyCustomPop;
