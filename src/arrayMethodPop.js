'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let value;

    if (this.length !== 0) {
      value = this[this.length - 1];
    } else {
      return undefined;
    }
    this.length = this.length - 1;

    return value;
  };
}

module.exports = applyCustomPop;
