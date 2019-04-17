'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let result = this.splice([this.length - 1], 1);
    if (result > 0) {
      return +result;
    }
  };
}

module.exports = applyCustomPop;
