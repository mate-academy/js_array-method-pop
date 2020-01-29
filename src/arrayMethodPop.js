'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lasElementtArr = this[this.length - 1];

    if (this.length) {
      this.length -= 1;
    }

    return lasElementtArr;
  };
}

module.exports = applyCustomPop;
