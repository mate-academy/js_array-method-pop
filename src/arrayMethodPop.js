'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const element = this[this.length - 1];
    this.length--;

    return element;
  };
}

module.exports = applyCustomPop;
