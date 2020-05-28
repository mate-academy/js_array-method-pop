'use strict';

function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (!this.length) {
      return undefined;
    }

    const lastItem = this[this.length - 1];

    this.length--;

    return lastItem;
  };
}

module.exports = applyCustomPop;
