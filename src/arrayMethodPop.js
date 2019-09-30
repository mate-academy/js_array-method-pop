'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    } else {
      const popElem = this[this.length - 1];
      this.length--;
      return popElem;
    }
  };
}

module.exports = applyCustomPop;
