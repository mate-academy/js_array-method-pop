'use strict';

/**
 * Implement method pop
 *
 */

function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length > 0) {
      this.length--;
      return this.length;
    }
  };
}

module.exports = applyCustomPop;
