'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastIndex = this.length - 1;
    return this.splice(lastIndex, 1)[0];
  };
}

module.exports = applyCustomPop;
