'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...args) {
    return this.pop(...args);
  };
}

module.exports = applyCustomPop;
