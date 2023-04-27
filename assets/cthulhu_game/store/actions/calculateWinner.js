import {CALCULATE_WINNER} from './actions'
export const calculateWinner = (squares) => {
  /* les différentes combinaisons gagnantes */
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  /* on parcourt les combinaisons gagnantes */
  for (let i = 0; i < lines.length; i++) {
    /* on récupère les 3 cases de la combinaison */
    const [a, b, c] = lines[i];
    /* si les 3 cases sont identiques et non nulles, on retourne le joueur gagnant et les cases gagnantes */
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        type: CALCULATE_WINNER,
        payload: {
          winner: squares[a],
          winningSquares: [a, b, c]
        }
      };
    }
  }
  /* si aucune combinaison n'est gagnante, on retourne null */
  return {
    type: CALCULATE_WINNER,
    payload: null,
  };
};
