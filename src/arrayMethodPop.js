'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...args) {
    if (this.length > 0) {
      return this.length -= 1;
    }
  };
}

module.exports = applyCustomPop;
