'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 1) {
      const tempItem = this[this.length - 1];
      this.length--;

      return tempItem;
    }
  };
}

module.exports = applyCustomPop;
