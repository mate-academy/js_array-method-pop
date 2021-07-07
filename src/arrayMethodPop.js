'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const wasDeleted = this[this.length - 1];

    if (this.length < 1) {
      return undefined;
    }
    this.length--;
    return wasDeleted;
  };
}

module.exports = applyCustomPop;
