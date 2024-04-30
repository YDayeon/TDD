import { Output, fizzBuzz } from "./fizz-buzz";

describe("fizz-buzz", () => {
  describe("Fizz", () => {
    test.each([{ input: 3 }, { input: 6 }, { input: 9 }])(
      "$input",
      ({ input }) => {
        const expected = Output.Fizz;
        const actual = fizzBuzz(input);
        expect(actual).toBe(expected);
      }
    );
  });
  describe("Buzz", () => {
    test.each([{ input: 5 }, { input: 10 }, { input: 20 }])(
      "$input",
      ({ input }) => {
        const expected = Output.Buzz;
        const actual = fizzBuzz(input);
        expect(actual).toBe(expected);
      }
    );
  });
  describe("FizzBuzz", () => {
    test.each([{ input: 15 }, { input: 30 }, { input: 75 }])(
      "$input",
      ({ input }) => {
        const expected = Output.FizzBuzz;
        const actual = fizzBuzz(input);
        expect(actual).toBe(expected);
      }
    );
  });
  describe("itself as a string", () => {
    test.each([
      { input: 1 },
      { input: 2 },
      { input: 4 },
      { input: 16 },
      { input: 77 },
    ])("$input", ({ input }) => {
      const expected = input.toString();
      const actual = fizzBuzz(input);
      expect(actual).toBe(expected);
    });
  });
});
