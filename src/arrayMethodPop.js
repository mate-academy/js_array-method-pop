'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    const temp = this.slice(this.length - 1,);
    this.splice(this.length - 1, 1);
    return temp[0];
  };
}

module.exports = applyCustomPop;
