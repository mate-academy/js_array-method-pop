'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const poppedElement = this[this.length - 1];
    
    this.length = this.length - 1;

    return poppedElement;
  };
}

module.exports = applyCustomPop;
