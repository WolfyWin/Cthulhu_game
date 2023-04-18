import {JUMP_TO } from './actions'

export const jumpTo = (step) => ({
  type: JUMP_TO,
  payload: step
});

