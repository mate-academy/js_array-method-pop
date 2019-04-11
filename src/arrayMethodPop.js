'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const token = this.splice(this.length - 1, 1);
    return token[0];
  };
}

module.exports = applyCustomPop;
