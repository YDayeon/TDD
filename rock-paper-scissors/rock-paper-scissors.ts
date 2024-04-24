export enum Move {
  Paper,
  Rock,
  Scissors,
}
export enum Outcome {
  PlayerWins,
  PlayerLoses,
  Tie,
}
interface RockScissorsPaper {
  play(playerMove: Move, opponent: Move): Outcome;
}
export function createRockPaperScissors(): RockScissorsPaper {
  const scenarios = [
    {
      playerMove: Move.Paper,
      opponentMove: Move.Rock,
      outcome: Outcome.PlayerWins,
    },
    {
      playerMove: Move.Paper,
      opponentMove: Move.Scissors,
      outcome: Outcome.PlayerLoses,
    },
    {
      playerMove: Move.Rock,
      opponentMove: Move.Scissors,
      outcome: Outcome.PlayerWins,
    },
    {
      playerMove: Move.Rock,
      opponentMove: Move.Paper,
      outcome: Outcome.PlayerLoses,
    },
    {
      playerMove: Move.Scissors,
      opponentMove: Move.Paper,
      outcome: Outcome.PlayerWins,
    },
    {
      playerMove: Move.Scissors,
      opponentMove: Move.Rock,
      outcome: Outcome.PlayerLoses,
    },
  ];

  const play = (playerMove: Move, opponentMove: Move) => {
    const result = scenarios.find(
      (scenario) =>
        scenario.playerMove === playerMove &&
        scenario.opponentMove === opponentMove
    );
    return result ? result.outcome : Outcome.Tie;
  };
  return { play };
}
