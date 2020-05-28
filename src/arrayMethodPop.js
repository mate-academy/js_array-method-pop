'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const deletedElement = this[this.length - 1];

    if (this.length > 0) {
      this.length = this.length - 1;
    } else {
      this.length = 0;
    }

    return deletedElement;
  };
}

module.exports = applyCustomPop;
