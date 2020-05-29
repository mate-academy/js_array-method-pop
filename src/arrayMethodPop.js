'use strict';

/**
 * Implement method pop
 */

function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const deleted = this[this.length - 1];

    this.length = this.length - 1;

    return deleted;
  };
}

module.exports = applyCustomPop;
