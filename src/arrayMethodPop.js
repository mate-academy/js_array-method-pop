'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.lenth === 0) {
      return undefined;
    }

    const a = this.splice(-1)[0];

    return a;
  };
}

module.exports = applyCustomPop;
