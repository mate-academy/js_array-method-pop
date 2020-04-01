'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    const answer = this[this.length - 1];

    if (this.length === 0) {
      return undefined;
    } else {
      this.length = this.length - 1;
    }

    return answer;
  };
}

module.exports = applyCustomPop;
