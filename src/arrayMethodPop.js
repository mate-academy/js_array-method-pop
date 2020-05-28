'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastElement = this[this.length - 1];

    if (this.length === 0) {
      return undefined;
    }

    this.length = this.length - 1;

    return lastElement;
  };
}

module.exports = applyCustomPop;
