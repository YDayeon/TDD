import { Move, Outcome, createRockPaperScissors } from "./rock-paper-scissors";

const Moves = {};

describe("rock-paper-scissors", () => {
  describe("play", () => {
    describe("Paper beats Rock", () => {
      describe("paper beats rock", () => {
        it("given player move paper and opponent move rock should return `Player Wins`", () => {
          // Arrange
          const sut = createRockPaperScissors();
          const expected = Outcome.PlayerWins;
          const playerMove = Move.Paper;
          const opponentMove = Move.Rock;
          // Action
          const actual = sut.play(playerMove, opponentMove);
          // Assert
          expect(actual).toBe(expected);
        });
        it("given player move rock and opponent move paper should return `Player Wins`", () => {
          // Arrange
          const sut = createRockPaperScissors();
          const expected = Outcome.PlayerLoses;
          const playerMove = Move.Rock;
          const opponentMove = Move.Paper;
          // Action
          const actual = sut.play(playerMove, opponentMove);

          // Assert
          expect(actual).toBe(expected);
        });
      });
      describe("scissors beats paper", () => {
        it("given player move scissors and opponent move paper should return `Player Wins`", () => {
          // Arrange
          const sut = createRockPaperScissors();
          const expected = Outcome.PlayerWins;
          const playerMove = Move.Scissors;
          const opponentMove = Move.Paper;
          // Action
          const actual = sut.play(playerMove, opponentMove);
          // Assert
          expect(actual).toBe(expected);
        });
        it("given player move paper and opponent move scissors should return `Player Wins`", () => {
          // Arrange
          const sut = createRockPaperScissors();
          const expected = Outcome.PlayerLoses;
          const playerMove = Move.Paper;
          const opponentMove = Move.Scissors;
          // Action
          const actual = sut.play(playerMove, opponentMove);
          // Assert
          expect(actual).toBe(expected);
        });
      });
      describe("rock beats scissors", () => {
        it("given player move paper and opponent move rock should return `Player Wins`", () => {
          // Arrange
          const sut = createRockPaperScissors();
          const expected = Outcome.PlayerWins;
          const playerMove = Move.Rock;
          const opponentMove = Move.Scissors;
          // Action
          const actual = sut.play(playerMove, opponentMove);
          // Assert
          expect(actual).toBe(expected);
        });
        it("given player move scissors and opponent move rock should return `Player Loses`", () => {
          // Arrange
          const sut = createRockPaperScissors();
          const expected = Outcome.PlayerLoses;
          const playerMove = Move.Scissors;
          const opponentMove = Move.Rock;
          // Action
          const actual = sut.play(playerMove, opponentMove);
          // Assert
          expect(actual).toBe(expected);
        });
      });

      it("given player move paper and opponent move paper should return `Tie`", () => {
        // Arrange
        const sut = createRockPaperScissors();
        const expected = Outcome.Tie;
        const playerMove = Move.Paper;
        const opponentMove = Move.Paper;
        // Action
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      });
      it("given player move rock and opponent move rock should return `Tie`", () => {
        // Arrange
        const sut = createRockPaperScissors();
        const expected = Outcome.Tie;
        const playerMove = Move.Rock;
        const opponentMove = Move.Rock;
        // Action
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      });
      it("given player move scissors and opponent move scissors should return `Tie`", () => {
        // Arrange
        const sut = createRockPaperScissors();
        const expected = Outcome.Tie;
        const playerMove = Move.Scissors;
        const opponentMove = Move.Scissors;
        // Action
        const actual = sut.play(playerMove, opponentMove);
        // Assert
        expect(actual).toBe(expected);
      });
    });
  });
});
