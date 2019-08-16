'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastEl = this[this.length - 1];

    if (this.length > 0) {
      this.length = this.length - 1;
    }

    return lastEl;
  };
}

module.exports = applyCustomPop;
