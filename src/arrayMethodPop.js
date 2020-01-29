'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length) {
      const poppedItem = this[this.length - 1];

      this.length -= 1;

      return poppedItem;
    }
  };
}

module.exports = applyCustomPop;
