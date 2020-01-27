'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  // eslint-disable-next-line no-extend-native
  Array.prototype.pop2 = function() {
    if (!this.length) {
      return undefined;
    }

    const lastElement = this[this.length - 1];

    this.length -= 1;

    return lastElement;
  };
}

module.exports = applyCustomPop;
