'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastSymbol = this[this.length - 1];
    if (this.length < 1) {
      return;
    }
    this.length = this.length - 1;
    return lastSymbol;
  };
}

module.exports = applyCustomPop;
