'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    return this.splice(-1, 1)[0];
  };
}

module.exports = applyCustomPop;
