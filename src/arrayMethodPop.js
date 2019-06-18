'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastSymbol = this[this.length - 1];
    this.splice(this.length - 1, 1);
    return lastSymbol;
  };
}

module.exports = applyCustomPop;
