'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    } else {
      const lastItem = this[this.length - 1];
      this.length--;
      console.log(this);
      return lastItem;
    }
  };
}

module.exports = applyCustomPop;
