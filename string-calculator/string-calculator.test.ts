// returns true if all the digits of a number are even.
// returns false if any of the digits of a number are odd.
// 123: false
// 222: true
// 2: true

import { areAllDigitsEven } from "./string-calculator";

// 3: false
describe("one digit", () => {
  test.each([
    { input: 0, expected: true },
    { input: 1, expected: false },
    { input: 2, expected: true },
    { input: 3, expected: false },
  ])("input: $input, expected: $expected", ({ input, expected }) => {
    expect(areAllDigitsEven(input)).toBe(expected);
  });
});

describe("two digit", () => {
  test.each([
    { input: 20, expected: true },
    { input: 41, expected: false },
    { input: 52, expected: false },
    { input: 99, expected: false },
  ])("input: $input, expected: $expected", ({ input, expected }) => {
    expect(areAllDigitsEven(input)).toBe(expected);
  });
});

describe("many digit", () => {
  test.each([
    { input: 246, expected: true },
    { input: 135, expected: false },
    { input: 2478, expected: false },
    { input: 5280, expected: false },
  ])("input: $input, expected: $expected", ({ input, expected }) => {
    expect(areAllDigitsEven(input)).toBe(expected);
  });
});
