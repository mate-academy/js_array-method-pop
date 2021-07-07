'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return;
    }

    const lastEl = this[this.length - 1];

    this.length--;

    return lastEl;
  };
}

module.exports = applyCustomPop;
