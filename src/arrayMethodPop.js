'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    return this.length !== 0
      ? (this.splice(-1, 1) * 1)
      : undefined;
  };
}

module.exports = applyCustomPop;
