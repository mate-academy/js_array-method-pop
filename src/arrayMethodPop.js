'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 1) {
      const unhappyItem = this[this.length - 1];
      this.length--;

      return unhappyItem;
    }
  };
}

module.exports = applyCustomPop;
