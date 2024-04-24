import { Output, fizzBuzz } from "./fizz-buzz";

describe("fizz-buzz", () => {
  describe("given input is only divisible by 3 should return Fizz", () => {
    it("given input 3 should return Fizz", () => {
      // Arrange
      const input = 3;
      const expected = Output.Fizz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 6 should return Fizz", () => {
      // Arrange
      const input = 6;
      const expected = Output.Fizz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 9 should return Fizz", () => {
      // Arrange
      const input = 9;
      const expected = Output.Fizz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
  });
  describe("given input is only divisible by 5 should return Buzz", () => {
    it("given input 5 should return Buzz", () => {
      // Arrange
      const input = 5;
      const expected = Output.Buzz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 10 should return Buzz", () => {
      // Arrange
      const input = 10;
      const expected = Output.Buzz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 20 should return Buzz", () => {
      // Arrange
      const input = 20;
      const expected = Output.Buzz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
  });
  describe("given input is divisible by 3 and 5 should return FizzBuzz", () => {
    it("given input 15 should return FizzBuzz", () => {
      // Arrange
      const input = 15;
      const expected = Output.FizzBuzz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 30 should return FizzBuzz", () => {
      // Arrange
      const input = 30;
      const expected = Output.FizzBuzz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 75 should return FizzBuzz", () => {
      // Arrange
      const input = 75;
      const expected = Output.FizzBuzz;

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
  });
  describe("given input is not divisible by 3 and 5 should return itself as a string", () => {
    it("given input 1 should return 1", () => {
      // Arrange
      const input = 1;
      const expected = input.toString();

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe("1");
    });
    it("given input 2 should return 2", () => {
      // Arrange
      const input = 2;
      const expected = input.toString();

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 4 should return 4", () => {
      // Arrange
      const input = 4;
      const expected = input.toString();

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 16 should return 16", () => {
      // Arrange
      const input = 16;
      const expected = input.toString();

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
    it("given input 77 should return 77", () => {
      // Arrange
      const input = 77;
      const expected = input.toString();

      // Active
      const actual = fizzBuzz(input);

      // Assure
      expect(actual).toBe(expected);
    });
  });
});
