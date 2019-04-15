'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let a = this[this.length - 1];
    if (this.length === 0) {
      return undefined;
    } else {
      this.length--;
    }
    return a;
  };
}

module.exports = applyCustomPop;
