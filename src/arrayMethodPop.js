'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastItem = this[this.length - 1];

    if (lastItem !== undefined) {
      this.length -= 1;
    }

    return lastItem;
  };
}

module.exports = applyCustomPop;
