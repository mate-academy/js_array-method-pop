'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const poppedItem = this[this.length - 1];

    if (!this.length) {
      return undefined;
    }

    this.length = this.length - 1;

    return poppedItem;
  };
}

module.exports = applyCustomPop;
