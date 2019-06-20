'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) {
      return undefined;
    }

    const popped = this[this.length - 1];
    this.length--;
    return popped;
  };
}
/* const n = [1, 2];
applyCustomPop()
console.log(n.pop2());
console.log(n);
 */
module.exports = applyCustomPop;
