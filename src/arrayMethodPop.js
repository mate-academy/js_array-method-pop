'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const items = this;
    let item = 0;

    if (items.length === 0) {
    item = undefined;
    }

    if (items.length > 0) {
      item = items[items.length - 1];
      items.length = items.length - 1;
    }
    return item;
  };
}

module.exports = applyCustomPop;
