'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const item = this[this.length - 1];

    if (this.length) {
      this.length -= 1;
    }

    return this.length < 1 ? undefined : item;
  };
}

module.exports = applyCustomPop;
