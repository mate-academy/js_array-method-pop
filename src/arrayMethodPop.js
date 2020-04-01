'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const result = this[this.length - 1];

    this.length = (this.length > 0) ? this.length - 1 : 0;

    return result;
  };
}

module.exports = applyCustomPop;
