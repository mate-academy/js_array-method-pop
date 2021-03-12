'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let deletingElemenet = this[this.length - 1];
    let len = this.length;
    if (!len) {
      return undefined;
    }
    this.length--;
    return deletingElemenet;
  };
}

module.exports = applyCustomPop;
