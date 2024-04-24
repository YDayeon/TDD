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
  const play = (playerMove: Move, opponentMove: Move) => {
    if (
      (playerMove === Move.Paper && opponentMove === Move.Rock) ||
      (playerMove === Move.Rock && opponentMove === Move.Scissors) ||
      (playerMove === Move.Scissors && opponentMove === Move.Paper)
    )
      return Outcome.PlayerWins;
    if (
      (playerMove === Move.Paper && opponentMove === Move.Scissors) ||
      (playerMove === Move.Rock && opponentMove === Move.Paper) ||
      (playerMove === Move.Scissors && opponentMove === Move.Rock)
    )
      return Outcome.PlayerLoses;
    return Outcome.Tie;
  };
  return { play };
}
