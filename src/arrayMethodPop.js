'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastElement = this[this.length - 1];

    if (this.length > 0) {
      this.length--;
    } else {
      this.length = 0;
    }

    return lastElement;
  };
}

module.exports = applyCustomPop;
