'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    } else {
      const item = this.length - 1;
      this.length = item;
      return item;
    }
  };
}

module.exports = applyCustomPop;
