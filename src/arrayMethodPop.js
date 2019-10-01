'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    return (this.length === 0)
      ? undefined : +this.splice(this.length - 1, 1).join();
  };
}

module.exports = applyCustomPop;
