import {calculateWinner}from '../actions/calculateWinner'
import {ADD_HISTORY, ADD_PLAYERS, CALCULATE_WINNER,
  JUMP_TO, MAKE_MOVE, UPDATE_SQUARE, ALL_PLAYERS} from '../actions/actions'

const X = "X";
const O = "O";
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
    case ALL_PLAYERS: {
      const { payload } = action;
      return {
        ...state,
        allPlayers: payload,
      };
    }
    case UPDATE_SQUARE: {
      return {
        ...state,
        xIsNext: !state.xIsNext,
      };
    }
    case CALCULATE_WINNER: {
      const { winner, winningSquares } = action.payload;
      return {
        ...state,
        winner,
        winningSquares,
      };
    }
    case ADD_HISTORY: {
      const { payload } = action;
      return {
        ...state,
        history: [...state.history, { squares: payload }],
      };
    }
    case ADD_PLAYERS: {
      const { payload } = action;
      console.log(payload);
      return {
        ...initialState,
        player1: payload.player1,
        player2: payload.player2,
      };
    }
    case MAKE_MOVE: {
      const { payload } = action;
      const history = state.history.slice(0, state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      const newSquares = squares.slice();
      if (calculateWinner(newSquares).payload || newSquares[payload]) {
        return state;
      }
      newSquares[payload] = state.xIsNext ? X : O;
      const { winner: newWinner } = calculateWinner(newSquares);
      return {
        ...state,
        history: [...history, { squares: newSquares }],
        stepNumber: history.length,
        xIsNext: !state.xIsNext,
        winner: newWinner,
      };
    }
    case JUMP_TO: {
      const { payload } = action;
      return {
        ...state,
        stepNumber: payload,
        xIsNext: payload % 2 === 0,
      };
    }
    default:
      return state;
  }
};

export { gameReducer };
