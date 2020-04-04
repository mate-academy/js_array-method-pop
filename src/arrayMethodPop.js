'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const res = this[this.length - 1];

    this.splice(this.length - 1, 1);

    return res;
  };
}

module.exports = applyCustomPop;
