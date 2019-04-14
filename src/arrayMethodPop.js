'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    return (this === []) ? this : this.splice(this.length - 1, 1)[0];
    // or this...
    /*
    if (this === []) {
      return this
    } else {
      const element = this[this.length];
      this.length -= 1;
      return element;
    }
    */
  };
}

module.exports = applyCustomPop;
