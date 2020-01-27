'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastElement = this[this.length - 1];

    this.splice([this.length - 1], 1);

    return this[this.length - 1] ? lastElement : undefined;
  };
}
module.exports = applyCustomPop;
