'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const arr = this;
    if (arr.length > 0) {
      const result = arr[arr.length - 1];
      arr.length = arr.length - 1;
      return result;
    }
  };
}

module.exports = applyCustomPop;
