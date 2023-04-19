import {ADD_HISTORY, CALCULATE_WINNER, JUMP_TO, MAKE_MOVE, UPDATE_SQUARE} from "../actions/actions";
import {calculateWinner}                                                                     from "../actions/calculateWinner";

const initialState = {
  xIsNext: true,
  winner: null,
  winningSquares: null,
  stepNumber: 0,
  history: [{ squares: Array(9).fill(null) }],
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
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
