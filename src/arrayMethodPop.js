'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let count = 0;
    // eslint-disable-next-line no-unused-vars
    for (const item of this) {
      count++;
    }

    const lastEl = this[count - 1];
    if (count > 0) {
      this.length = count - 1;
    }

    return lastEl;
  };
}

module.exports = applyCustomPop;
