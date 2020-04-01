'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const popItem = this[this.length - 1];

    if (this.length > 0) {
      this.length = this.length - 1;
    }

    return popItem;
  };
}

module.exports = applyCustomPop;
