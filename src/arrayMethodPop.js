'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }
    const elem = this[this.length - 1];
    this.length--;
    return elem;
  };
}

module.exports = applyCustomPop;
