'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const element = this[this.length - 1];

    if (this.length < 1) {
      return undefined;
    }

    this.length -= 1;

    return element;
  };
}

module.exports = applyCustomPop;
