'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const returnItem = (this.length ? this[this.length - 1] : undefined);

    if (this.length) {
      this.length = this.length - 1;
    }
    return returnItem;
  };
}

module.exports = applyCustomPop;
