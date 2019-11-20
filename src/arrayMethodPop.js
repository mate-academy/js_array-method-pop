'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    if (!this.length) {
      return undefined;
    }
    const lastElement = this[this.length - 1];
    this.length = this.length - 1;

    // console.log(this.length-1);

    return lastElement;
  };
}

module.exports = applyCustomPop;
