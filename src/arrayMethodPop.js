'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const item = this[this.length - 1];

    if (this.length === 0) {
      return undefined;
    }

    this.length = this.length - 1;

    return item;
  };
}

module.exports = applyCustomPop;
