'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const x = this[this.length - 1];
    this.length = this.length > 1 ? this.length - 1 : this.length;
    return x;
  };
}

module.exports = applyCustomPop;
