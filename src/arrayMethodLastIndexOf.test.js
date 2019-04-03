'use strict';

const applyCustomLastIndexOf = require('./arrayMethodLastIndexOf');
const source = ['11', '22', '33', '', 44, '11', 55];
applyCustomLastIndexOf();

test('`lastIndexOf2` is added to [].__proto__', () => {
    expect(typeof [].lastIndexOf2).toBe('function');
});

test(`without valueToFind`, () => {
  expect(source.lastIndexOf2()).toBe(-1);
});

test(`lastIndexOf2('11') = 5`, () => {
  expect(source.lastIndexOf2('11')).toBe(5);
});

test(`lastIndexOf2(11) = -1`, () => {
  expect(source.lastIndexOf2(11)).toBe(-1);
});

test(`lastIndexOf2('1') = -1`, () => {
  expect(source.lastIndexOf2('1')).toBe(-1);
});

test(`lastIndexOf2('11', -1) = 5`, () => {
  expect(source.lastIndexOf2('11', -1)).toBe(5);
});

test(`lastIndexOf2('11', -2) = 5`, () => {
  expect(source.lastIndexOf2('11', -2)).toBe(5);
});

test(`lastIndexOf2('11', -3) = 0`, () => {
  expect(source.lastIndexOf2('11', -3)).toBe(0);
});

test(`lastIndexOf2(44, -1) = 4`, () => {
  expect(source.lastIndexOf2(44, -1)).toBe(4);
});

test(`lastIndexOf2('') = 3`, () => {
  expect(source.lastIndexOf2('')).toBe(3);
});

test(`[].lastIndexOf2() = -1`, () => {
  expect([].lastIndexOf2()).toBe(-1);
});
