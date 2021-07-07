'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const removeElement = this[this.length - 1];
    this.splice(this.length - 1);

    return removeElement;
  };
}

module.exports = applyCustomPop;
