'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const returnItem = (this.length !== 0 ? this[this.length - 1] : undefined);

    if (this.length !== 0) {
      this.length = this.length - 1;
    }
    return returnItem;
  };
}

module.exports = applyCustomPop;
