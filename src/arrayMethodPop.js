'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const popped = this[this.length - 1];

    if (!this.length) {
      return undefined;
    }
    this.length -= 1;

    return popped;
  };
}

module.exports = applyCustomPop;
