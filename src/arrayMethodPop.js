'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const res = this[this.length - 1];

    if (this.length > 0) {
      this.length = this.length - 1;
    } else {
      this.length = this.length = 0;
    }

    return res;
  };
}

module.exports = applyCustomPop;
