'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const result = this.splice(this.length - 1);

    return result[0];
  };
}

module.exports = applyCustomPop;
