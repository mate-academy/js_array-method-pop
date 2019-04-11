'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    this.splice(this.length - 1, 1);
    if (this.length === 0) {
      return undefined;
    } else {
      return this.length;
    }
  };
}

module.exports = applyCustomPop;
