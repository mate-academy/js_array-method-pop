'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return;
    }

    const deletedItem = this[this.length - 1];
    this.length--;

    return deletedItem;
  };
}

module.exports = applyCustomPop;
