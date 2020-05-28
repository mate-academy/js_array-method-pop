'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const removedElement = this[this.length - 1];

    if (this.length < 1) {
      return undefined;
    }

    this.length--;

    return removedElement;
  };
}

module.exports = applyCustomPop;
