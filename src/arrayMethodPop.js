'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length < 1) {
      return undefined;
    } else {
      const pop = this[this.length - 1];
      this.length = this.length - 1;
      return pop;
    }
  };
}

module.exports = applyCustomPop;
