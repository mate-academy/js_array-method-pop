'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length) {
      let last = this[this.length - 1];
      this.length--;
      return last;
    }
  };
}

module.exports = applyCustomPop;
