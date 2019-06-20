'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const currentLength = this.length;
    let lastItem;

    if (currentLength !== 0) {
      lastItem = this[currentLength - 1];
      this.length = currentLength - 1;
    }

    return lastItem;
  };
}

module.exports = applyCustomPop;
