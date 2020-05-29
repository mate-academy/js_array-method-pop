'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return;
    }

    const arrayLength = this[this.length - 1];

    this.length--;

    return arrayLength;
  };
}

module.exports = applyCustomPop;
