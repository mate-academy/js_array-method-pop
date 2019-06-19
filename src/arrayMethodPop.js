'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const deleteElem = this[this.length - 1];
    if (this.length < 1) {
      return undefined;
    } else {
      this.length--;
      return deleteElem;
    }
  };
}

module.exports = applyCustomPop;
