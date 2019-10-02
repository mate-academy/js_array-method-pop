'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    return this.splice(this.length - 1)[0];
  };
}

module.exports = applyCustomPop;
