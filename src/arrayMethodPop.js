'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...args) {
    if (this.length > 0) {
      const deletedElem = this[this.length - 1];
      this.length--;
      return deletedElem;
    }
  };
}

module.exports = applyCustomPop;
