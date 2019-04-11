'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (this.length === 0) {
      return undefined;
    }
    let remuvedItem = this[this.length - 1];
    this.length -= 1;
    return remuvedItem;
  };
}

module.exports = applyCustomPop;
