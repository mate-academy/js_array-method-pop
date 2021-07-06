'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const item = this[this.length - 1];
    if (this.length > 0) {
      this.length--;
    }
    return item;
  };
}

module.exports = applyCustomPop;
