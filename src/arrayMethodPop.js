'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    const result = this[(this.length - 1)];
    if (this.length > 0) {
      this.length = (this.length - 1);
      return result;
    }
    return undefined;
  };
}

module.exports = applyCustomPop;
