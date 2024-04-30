import { createAgeCalculator } from "./age-calculator";

describe("age-calculator", () => {
  describe("has had birthday this year", () => {
    test.each([
      { birthDate: "1982/09/30", targetDate: "2001/10/05", expected: 19 },
      { birthDate: "1980/02/07", targetDate: "2002/10/05", expected: 22 },
      { birthDate: "1998/01/14", targetDate: "2024/04/26", expected: 26 },
      { birthDate: "1980/04/01", targetDate: "2024/04/26", expected: 44 },
      { birthDate: "1979/02/15", targetDate: "2000/03/21", expected: 21 },
    ])(
      "birthdate : $birthDate, targetdate: $targetDate, expected: $expected",
      ({ birthDate, targetDate, expected }) => {
        const sut = createAgeCalculator();

        const actual = sut(new Date(birthDate), new Date(targetDate));

        expect(actual).toBe(expected);
      }
    );
    describe("has not had birthday this year", () => {
      describe("birthday in later month", () => {
        test.each([
          { birthDate: "1998/12/23", targetDate: "2024/04/24", expected: 25 },
          { birthDate: "2015/03/27", targetDate: "2022/02/28", expected: 6 },
          { birthDate: "1971/11/27", targetDate: "2024/04/26", expected: 52 },
        ])(
          "birthdate : $birthDate, targetdate: $targetDate, expected: $expected",
          ({ birthDate, targetDate, expected }) => {
            const sut = createAgeCalculator();

            const actual = sut(new Date(birthDate), new Date(targetDate));

            expect(actual).toBe(expected);
          }
        );
      });
      describe("birthday in same month", () => {
        test.each([
          { birthDate: "1998/04/25", targetDate: "2024/04/24", expected: 25 },
          { birthDate: "2015/02/17", targetDate: "2022/02/11", expected: 6 },
        ])(
          "birthdate : $birthDate, targetdate: $targetDate, expected: $expected",
          ({ birthDate, targetDate, expected }) => {
            const sut = createAgeCalculator();

            const actual = sut(new Date(birthDate), new Date(targetDate));

            expect(actual).toBe(expected);
          }
        );
      });
    });
  });
});
