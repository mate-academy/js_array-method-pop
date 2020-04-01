'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const items = this;

    if (items.length === 0) {
      return undefined;
    }

    const element = items[items.length - 1];

    items.length = items.length - 1;

    return element;
  };
}

module.exports = applyCustomPop;
