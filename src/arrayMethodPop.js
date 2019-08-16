'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(array) {
    // write code here
    array.length = array.length - 1;
    return array.length;
  };
}

module.exports = applyCustomPop;
