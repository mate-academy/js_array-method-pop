'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const lastElem = this[this.length - 1];

    if (this.length < 1) {
      return;
    };

    this.length -= 1;

    return lastElem;
  };
};

module.exports = applyCustomPop;
