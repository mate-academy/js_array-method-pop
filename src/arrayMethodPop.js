'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let lastArrElem;

    if (this.length === 0) {
      return undefined;
    } else {
      lastArrElem = this[this.length - 1];
      this.length = this.length - 1;
    }

    return lastArrElem;
  };
}

module.exports = applyCustomPop;
