'use strict';

/**
 * Implement method pop
 */
function applyCustomPop() {
  [].__proto__.pop2 = function() {
    if (this.length === 0) { // Проверяем массив на пустоту
      return undefined;
    }

    // this[this.length - 1] - последний элемент массива
    const deletedElement = this[this.length - 1];
    // Уменьшаем длину массива на 1 (аналог удаления последнего элемента)
    this.length--;

    return deletedElement;
  };
}

module.exports = applyCustomPop;
