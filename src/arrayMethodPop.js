'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const deleteElement = this[this.length - 1];
    this.length = this.length - 1;

    return deleteElement;
  };
}

module.exports = applyCustomPop;
