'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length) {
      const pop = this[this.length - 1];

      this.length -= 1;

      return pop;
    }
  };
}

module.exports = applyCustomPop;
