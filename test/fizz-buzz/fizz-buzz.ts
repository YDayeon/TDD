export enum Output {
  Fizz,
  Buzz,
  FizzBuzz,
}

export function fizzBuzz(num: number): string | Output {
  if (num % 3 === 0 && num % 5 === 0) return Output.FizzBuzz;
  if (num % 3 === 0) return Output.Fizz;
  if (num % 5 === 0) return Output.Buzz;

  return num.toString();
}
