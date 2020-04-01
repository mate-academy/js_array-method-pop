'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    let popElement;

    if (this.length === 0) {
      return undefined;
    } else {
      popElement = this[this.length - 1];
      this.length = this.length - 1;
    }

    return popElement;
  };
}

module.exports = applyCustomPop;
