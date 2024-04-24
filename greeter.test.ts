import { greeter } from "./greeter";

describe("helloWorld", () => {
  it("it should return Hello World!", () => {
    const expected = "Hello World!";

    const sut = greeter();

    const result = sut.helloWorld();

    expect(result).toBe(expected);
  });
});

describe("helloPerson", () => {
  it("given empty name should return `Hello!`", () => {
    // Arrange
    const input = "";
    const expected = "Hello !";

    const sut = greeter(); // system under test

    // Act
    const result = sut.helloPerson(input);

    // Assert
    expect(result).toBe(expected);
  });

  it("given name of Peter should return `Hello Peter!`", () => {
    // Arrange
    const input = "Peter";
    const expected = "Hello Peter!";

    const sut = greeter(); // system under test

    // Act
    const result = sut.helloPerson(input);

    // Assert
    expect(result).toBe(expected);
  });
});
