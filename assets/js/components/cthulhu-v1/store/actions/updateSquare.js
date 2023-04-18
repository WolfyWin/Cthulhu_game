import { UPDATE_SQUARE } from './actions'

export const updateSquare = (index, value) => ({
  type: UPDATE_SQUARE,
  payload: {
      index,
      value
    }
});
