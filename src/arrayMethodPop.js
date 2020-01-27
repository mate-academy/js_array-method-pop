'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return undefined;
    }

    const popped = this[this.length - 1];

    this.length--;

    return popped;
  };
}

module.exports = applyCustomPop;
