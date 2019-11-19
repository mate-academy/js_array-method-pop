'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastElement = this[this.length - 1];
    if (this.length > 1) {
      this.length = this.length - 1;
      return lastElement;
    } else {
      delete this;
      return undefined;
    }
  };
}

module.exports = applyCustomPop;
