'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const popped = this[this.length - 1];

    this.length = this.length - 1;

    return popped;
  };
}

module.exports = applyCustomPop;
