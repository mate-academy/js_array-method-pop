'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return undefined;
    }

    const lastElement = this[this.length - 1];

    this.length--;

    return lastElement;
  };
}

module.exports = applyCustomPop;
