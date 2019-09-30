'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    let len = this.length;
    let value;

    if (len) {
      value = this[--len];
      delete this[len];
    }
    this.length = len;

    return value;
  };
}

module.exports = applyCustomPop;
