'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    this.length = this.length - 1;
    return this.length ? this.length : undefined;
  };
}

module.exports = applyCustomPop;
