'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const last = this[this.length - 1];
    this.splice(this.length - 1, 1);
    return last;
  };
}

module.exports = applyCustomPop;
