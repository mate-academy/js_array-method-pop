'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return;
    }

    this.splice(-1, 1);

    return this.length;
  };
}

module.exports = applyCustomPop;
