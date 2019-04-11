'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...args) {
    if (this.length > 0) {
      this.length -= 1;
      return this.length;
    }
  };
}

module.exports = applyCustomPop;
