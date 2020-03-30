'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let popItem;

    if (this.length > 0) {
      popItem = this[this.length - 1];
      this.length = this.length - 1;
    }

    return popItem;
  };
}

module.exports = applyCustomPop;
