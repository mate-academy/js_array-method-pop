'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
  // write code here
    if (this.length) {
      const deleteElem = this[this.length - 1];
      this.length = this.length - 1;
      return deleteElem;
    } else {
      return undefined;
    }
  };
}

module.exports = applyCustomPop;
