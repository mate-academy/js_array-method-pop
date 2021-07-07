'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (this.length === 0) {
      return;
    }

    const res = this[this.length - 1];

    this.length = this.length - 1;

    return res;
  };
}

module.exports = applyCustomPop;
