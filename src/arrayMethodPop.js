'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const popElement = this[this.length - 1];

    if (popElement !== undefined) {
      this.length -= 1;
    }

    return popElement;
  };
}

module.exports = applyCustomPop;
