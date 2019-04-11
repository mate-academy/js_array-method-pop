'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let element = this.length === 0 ? false : this[this.length - 1];
    if (!element) {
      return undefined;
    }
    this.length--;
    return element;
  };
}

module.exports = applyCustomPop;
