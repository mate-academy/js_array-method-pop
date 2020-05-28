'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const deleted = this[this.length - 1];

    if (this.length < 1) {
      return undefined;
    }

    this.length--;

    return deleted;
  };
}

module.exports = applyCustomPop;
