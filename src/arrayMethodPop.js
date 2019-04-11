'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...args) {
    if (this.length > 0) {
      let lastItem = this[this.length - 1];
      this.length -= 1;
      return lastItem;
    }
  };
}

module.exports = applyCustomPop;
