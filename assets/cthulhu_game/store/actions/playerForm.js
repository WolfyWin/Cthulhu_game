import {ADD_PLAYERS} from "./actions";
export const addPlayer = (player1, player2) => ({
  type: ADD_PLAYERS,
  payload: {
    player1,
    player2
  }
});
