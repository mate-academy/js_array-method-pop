'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const popResult = this[this.length - 1];

    if (!this.length) {
      return undefined;
    }

    this.length = this.length - 1;

    return popResult;
  };
}

module.exports = applyCustomPop;
