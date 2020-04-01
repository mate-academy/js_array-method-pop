'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const item = this.length - 1;
    const lastElem = this[item];

    if (this.length !== 0) {
      delete this[item];
      this.length = item;

      return lastElem;
    } else {
      return undefined;
    }
  };
}

module.exports = applyCustomPop;
