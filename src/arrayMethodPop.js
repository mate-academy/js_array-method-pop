'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let lastValueOfArray = null;

    if (this.length === 0) {
      return;
    }
    lastValueOfArray = this[this.length - 1];
    this.length -= 1;

    return lastValueOfArray;
  };
}

module.exports = applyCustomPop;
