'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return;
    }

    const lastElement = this[this.length - 1];

    this.length = this.length - 1;

    return lastElement;
  };
}

module.exports = applyCustomPop;
