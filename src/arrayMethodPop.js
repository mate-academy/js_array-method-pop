'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length) {
      const item = this[this.length - 1];

      this.length -= 1;

      return item;
    }
  };
}

module.exports = applyCustomPop;
