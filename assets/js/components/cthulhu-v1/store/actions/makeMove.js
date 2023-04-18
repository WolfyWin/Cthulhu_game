import {MAKE_MOVE} from './actions'

export const makeMove = (squareMove) => ({
  type: MAKE_MOVE,
  payload: squareMove
});
