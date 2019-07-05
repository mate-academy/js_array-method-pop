'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...args) {
    // write code here
    if (this.length > 0) {
      let lastElement = this[this.length - 1];
      this.length = this.length - 1;
      return lastElement;
    };
    return undefined;
  };
}

applyCustomPop();
console.log([].pop2());

module.exports = applyCustomPop;
