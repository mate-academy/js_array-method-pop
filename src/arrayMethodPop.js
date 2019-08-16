'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length < 1) {
      return undefined;
    } else {
      return this.splice(this.length - 1, 1)[0];
    }
  };
}

module.exports = applyCustomPop;
