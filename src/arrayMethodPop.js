'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let popItem = 0;

    if (this.length === 0) {
      return undefined;
    }

    popItem = this[this.length - 1];
    this.length -= 1;

    return popItem;

    // const popItem = this.splice(-1);
    // if (this.length === 0) {
    //   return undefined;
    // }
    // return +popItem;
  };
}

module.exports = applyCustomPop;
