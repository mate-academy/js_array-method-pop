'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const deletedItem = this[this.length - 1];

    (this.length) ? this.length = this.length - 1 : this.length = 0;

    return deletedItem;
  };
}

module.exports = applyCustomPop;
