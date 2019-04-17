'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...theArgs) {
    // write code here
    let a = +this.splice([this.length - 1], 1);
    if (a > 0) {
      return a;
    } else {
      return undefined;
    }
  };
}
module.exports = applyCustomPop;
