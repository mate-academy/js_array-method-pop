'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const returnedValue = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;

    return returnedValue;
  };
}

module.exports = applyCustomPop;
