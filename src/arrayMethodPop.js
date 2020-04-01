'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const res = this.reverse().shift();

    this.reverse();

    return res;
  };
}

module.exports = applyCustomPop;
