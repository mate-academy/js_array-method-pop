'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return;
    }

    const lastItem = this[this.length - 1];

    this.length--;

    return lastItem;
  };
}

module.exports = applyCustomPop;
