'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const arrPop = this[this.length - 1];
    if (this.length > 0) {
      this.length = this.length - 1;
    }
    return arrPop;
  };
}

module.exports = applyCustomPop;
