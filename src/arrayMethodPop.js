'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...args) {
    let result = this.splice(this.length - 1, 1);
    if (result.length === 0) {
      return undefined;
    }
    if (result.length !== 0) {
      let number = 0;
      result.forEach(function(i) {
        number += i;
      });
      return number;
    }
  };
}

module.exports = applyCustomPop;
