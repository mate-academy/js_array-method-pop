'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (!this.length) {
      return undefined;
    }

    const indexOfLastElement = this.length - 1;

    const lastElement = this[indexOfLastElement];

    this.length = indexOfLastElement;

    return lastElement;
  };
}

module.exports = applyCustomPop;
