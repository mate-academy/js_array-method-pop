'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const popElem = this[this.length - 1];
    if (this.length > 0) {
      this.length--;
    }

    return popElem;
  };
}

module.exports = applyCustomPop;
