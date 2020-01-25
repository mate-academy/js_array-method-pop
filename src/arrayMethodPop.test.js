'use strict';

const applyCustomPop = require('./arrayMethodPop');

applyCustomPop();

test('pop2 is added to [].__proto__', () => {
  expect([].pop2)
    .toBeInstanceOf(Function);
});

test(`pop2 doesn't call default pop`, () => {
  expect([].pop2.toString().includes('.pop('))
    .toBe(false);
});

test('pop single item', () => {
  const source = [5, 6, 7, 8];
  const result = source.pop2();

  expect(source)
    .toEqual([5, 6, 7]);

  expect(result)
    .toBe(8);
});

test('pop from empty array', () => {
  const source = [];
  const result = source.pop2();

  expect(source)
    .toEqual([]);

  expect(result)
    .toBe(undefined);
});

test('pop ignores arguments', () => {
  const source = [7, 6, 5, 1];
  const result = source.pop2(2);

  expect(source)
    .toEqual([7, 6, 5]);

  expect(result)
    .toBe(1);
});
