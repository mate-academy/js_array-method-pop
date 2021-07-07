'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const items = this;
    let lastElement;

    if (items.length !== 0) {
      lastElement = items[items.length - 1];
      items.length = items.length - 1;
    }

    return lastElement;
  };
}

module.exports = applyCustomPop;
