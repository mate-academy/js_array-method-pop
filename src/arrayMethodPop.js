'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length < 1) {
      return undefined;
    }

    const res = this[this.length - 1];

    this.length = this.length - 1;

    return res;
  };
}
module.exports = applyCustomPop;
