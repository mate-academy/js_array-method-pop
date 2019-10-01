'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const length = this.length;
    const res = this[length - 1];
    this.splice(length - 1, 1);
    return res;
  };
}

module.exports = applyCustomPop;
