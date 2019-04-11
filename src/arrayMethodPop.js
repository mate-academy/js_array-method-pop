'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let arrayLastElement = this[this.length - 1];
    let arrayLength = this.length;
    if (arrayLength === 0) {
      return undefined;
    }
    this.length--;
    return arrayLastElement;
  };
}

module.exports = applyCustomPop;
