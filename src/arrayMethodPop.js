'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let popElem;
    if (!this.length) {
      return this[this.length];
    } else {
      popElem = this[this.length - 1];
      this.length -= 1;
      return popElem;
    }
  };
}

module.exports = applyCustomPop;
