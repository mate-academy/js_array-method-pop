'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const removeLastItem = this[this.length - 1];
    if (removeLastItem) {
      this.length -= 1;
    }
    return removeLastItem;
  };
}

module.exports = applyCustomPop;
