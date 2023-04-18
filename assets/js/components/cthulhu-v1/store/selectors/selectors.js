import {calculateWinner}  from "../actions/calculateWinner";
import { createSelector } from 'reselect';

const game = (state) => state;

export const getXIsNext = createSelector(
  [game],
  (game) => game.xIsNext
);

export const getWinner = createSelector(
  [game],
  (game) => game.winner
);

export const getWinningSquares = createSelector(
  [game],
  (game) => game.winningSquares
);

export const getStepNumber = createSelector(
  [game],
  (game) => game.stepNumber
);

export const getHistory = createSelector(
  [game],
  (game) => game.history
);

export const getCurrentSquares = createSelector(
  [getHistory, getStepNumber],
  (history, stepNumber) => history[stepNumber].squares
);

export const getStatus = createSelector(
  [getCurrentSquares, getXIsNext, getWinner],
  (squares, xIsNext, winner) => {
    if (winner) {
      return winner.winner === "X"
        ? "Le Mortel a sauvé son âme !"
        : "Le grand Cthulhu vous a englouti !";
    } else if (squares.every((square) => square !== null)) {
      return "Match nul !";
    } else {
      return `${xIsNext ? "Mortel" : "Cthulhu"}, à vous de jouer.`;
    }
  }
);

export const isWinningSquare = (squares, i) => {
  const winningSquares = calculateWinner(squares).payload;
  if (winningSquares && winningSquares.winningSquares.includes(i)) {
    return "winning-square";
  }
  return null;
};
