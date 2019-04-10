'use strict';

/**
 * Implement method pop
 *
 */
function applyCustomPop() {
  [].__proto__.pop2 = function(...arg) {
    return this.pop(...arg);
  };
}

module.exports = applyCustomPop;
