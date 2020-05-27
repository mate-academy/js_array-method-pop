'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const deletedProperty = this[this.length - 1];

    this.length = this.length === 0 ? 0 : this.length - 1;

    return deletedProperty;
  };
}

module.exports = applyCustomPop;
