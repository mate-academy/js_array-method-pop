'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let popCut;

    if (this.length > 0) {
      popCut = this[this.length - 1];
      this.length = this.length - 1;
    };

    return popCut;
  };
}

module.exports = applyCustomPop;
