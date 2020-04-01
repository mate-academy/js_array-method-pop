'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    return +this.splice(-1, 1);
  };
}

module.exports = applyCustomPop;
