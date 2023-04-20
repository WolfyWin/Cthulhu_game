import {ADD_HISTORY, ADD_PLAYERS, CALCULATE_WINNER, JUMP_TO, MAKE_MOVE, UPDATE_SQUARE, ALL_PLAYERS} from "../actions/actions";
import {calculateWinner}                                                               from "../actions/calculateWinner";

const initialState = {
  xIsNext: true,
  winner: null,
  player1: null,
  player2: null,
  allPlayers: null,
  winningSquares: null,
  stepNumber: 0,
  history: [{ squares: Array(9).fill(null) }],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_PLAYERS:
      return {
        ...state,
        allPlayers: action.payload
      };
    case UPDATE_SQUARE:
      return {
        ...state,
        xIsNext: !state.xIsNext
      };
    case CALCULATE_WINNER:
      return {
        ...state,
        winner: action.payload.winner,
        winningSquares: action.payload.winningSquares
      };
    case ADD_HISTORY:
      return {
        ...state,
        history: [...state.history, { squares: action.payload }]
      };
    case ADD_PLAYERS:
      console.log(action.payload);
      return {
        ...state,
        xIsNext: true,
        winner: null,
        winningSquares: null,
        stepNumber: 0,
        history: [{ squares: Array(9).fill(null) }],
        player1: action.payload.player1,
        player2: action.payload.player2
      };
    case MAKE_MOVE:
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const newSquares = squares.slice();
      if (calculateWinner(newSquares).payload || newSquares[action.payload]) {
        return state;
      }
      newSquares[action.payload] = state.xIsNext ? 'X' : 'O';
      const newWinner = calculateWinner(newSquares).payload;
      return {
        ...state,
        history: [...history, { squares: newSquares }],
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        winner: newWinner,
      };
    case JUMP_TO:
      return {
        ...state,
        stepNumber: action.payload,
        xIsNext: action.payload % 2 === 0,
      };
    default:
      return state;
  }
};

export {gameReducer };
