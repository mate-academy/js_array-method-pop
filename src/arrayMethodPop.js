'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let popItem;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        popItem = this[i];
        delete this[i];
        this.length = this.length - 1;
      }
    }

    return popItem;
  };
}

module.exports = applyCustomPop;
