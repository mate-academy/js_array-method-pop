'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...arg) {
    let result = +this.splice(-1, 1);
    if (result > 0) {
      return result;
    } else return undefined;
  };
}

module.exports = applyCustomPop;
