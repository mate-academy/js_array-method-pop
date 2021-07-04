'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    const popMethod = this[this.length - 1];
    if (this.length > 0) {
      this.length--;
    }

    return popMethod;
  };
}

module.exports = applyCustomPop;
