'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 0) {
      const item = this[this.length - 1];
      this.length = this.length - 1;
      return item;
    }
  };
}

module.exports = applyCustomPop;
