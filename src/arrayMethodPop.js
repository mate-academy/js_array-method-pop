'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length.isEmpty) {
      return;
    }
    const lastElement = this[this.length - 1];
    if (this.length) {
      this.length--;
      return lastElement;
    }
  };
}

module.exports = applyCustomPop;
