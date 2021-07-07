'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const arr = this;
    if (arr.length === 0) {
      return undefined;
    }
    const lastInd = arr.length - 1;
    const abstractedElmnt = arr[lastInd];
    arr.length = lastInd;
    return abstractedElmnt;
  };
}

module.exports = applyCustomPop;
