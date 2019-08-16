'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    return this.length !== 0 ? (this.length = this.length - 1) : undefined;
  };
}

module.exports = applyCustomPop;
