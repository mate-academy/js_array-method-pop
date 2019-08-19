'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    return this.splice(-1)[0];
  };
}

module.exports = applyCustomPop;
