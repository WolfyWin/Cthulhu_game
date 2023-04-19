import {ADD_PLAYER} from "./actions";
export const addPlayer = (player1, player2) => ({
  type: ADD_PLAYER,
  payload: {
    player1,
    player2
  }
});
