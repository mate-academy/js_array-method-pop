'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const object = this[this.length - 1];

    if (this.length === 0) {
      return undefined;
    } else {
      this.length = this.length - 1;

      return object;
    }
  };
}

module.exports = applyCustomPop;
