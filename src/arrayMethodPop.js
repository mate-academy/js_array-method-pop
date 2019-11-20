'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }
    const deleteItem = this.splice(-1);
    return +deleteItem;
  };
}

module.exports = applyCustomPop;
