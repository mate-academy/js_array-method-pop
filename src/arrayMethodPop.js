'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lengthArr = this.length;
    if (lengthArr > 1) {
      const endElement = this[lengthArr - 1];
      this.length--;
      return endElement;
    }
  };
}

module.exports = applyCustomPop;
