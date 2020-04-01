'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    const arr = this;

    if (arr.length === 0) {
      return;
    }

    const last = JSON.parse(JSON.stringify(arr[arr.length - 1]));

    arr.length--;

    return last;
  };
}
module.exports = applyCustomPop;
