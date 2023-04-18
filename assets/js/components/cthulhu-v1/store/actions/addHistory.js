import { ADD_HISTORY } from './actions'

export const addHistory = (squares) => ({
  type: ADD_HISTORY,
  payload: squares
});
