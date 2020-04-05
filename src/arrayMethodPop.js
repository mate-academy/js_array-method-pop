'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 0) {
      const last = this[this.length - 1];

      this.length -= 1;

      return last;
    }
  };
}

module.exports = applyCustomPop;
