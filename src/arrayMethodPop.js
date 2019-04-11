'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return this[this.length];
    } else {
      this.length -= 1;
      return this.length;
    }
  };
}

module.exports = applyCustomPop;
