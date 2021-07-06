'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return;
    }
    const delElement = this[this.length - 1];
    this.length--;
    return delElement;
  };
}

module.exports = applyCustomPop;
