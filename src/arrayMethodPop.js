'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    // write code here
    let popElement;

    if (this.length === 0) {
      return undefined;
    } else {
      popElement = this.splice(this.length - 1, 1);
    }

    return popElement[0];
  };
}

module.exports = applyCustomPop;
