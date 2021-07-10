'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const items = this;
    const result = items[items.length - 1];

    if (items.length > 0) {
      items.length = items.length - 1;
    }

    return result;
  };
}

module.exports = applyCustomPop;
