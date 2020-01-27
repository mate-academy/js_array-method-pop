'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const elem = this[this.length - 1];

    if (this.length === 0) {
      return undefined;
    }
    this.length = this.length - 1;

    return elem;
  };
}

module.exports = applyCustomPop;
