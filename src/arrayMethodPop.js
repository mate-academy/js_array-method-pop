'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return undefined;
    }
    const delItem = this[this.length - 1];
    this.length = this.length - 1;

    return delItem;
  };
}

module.exports = applyCustomPop;
