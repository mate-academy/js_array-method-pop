'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let lastElement;

    if (this.length > 0) {
      lastElement = this[this.length - 1];
      this.length--;
    }

    return lastElement;
  };
}

module.exports = applyCustomPop;
