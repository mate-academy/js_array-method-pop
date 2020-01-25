'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const deleted = this[this.length - 1];

    this.splice(this.length - 1, 1);

    return deleted;
  };
}

module.exports = applyCustomPop;
