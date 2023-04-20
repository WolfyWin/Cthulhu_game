import React from 'react'

// Fonction pour afficher le corps du tableau
const ResultScore = ({ players }) => {
  if (!players) {
    return (
      <tr>
        <td colSpan="4">Chargement...</td>
      </tr>
    );
  } else if (players.length === 0) {
    return (
      <tr>
        <td colSpan="4">Aucun joueur trouvé !</td>
      </tr>
    );
  } else {
    return players.map((player) => {
      const lastActivityDate = new Date(
        player.lastActivity.timestamp * 1000
      ).toLocaleDateString('fr');
      const lastActivityTime = new Date(
        player.lastActivity.timestamp * 1000
      ).toLocaleTimeString('fr');
      return (
        <tr key={player.id}>
          <td>{player.name}</td>
          <td>{player.gamesPlayed}</td>
          <td>{player.gamesWon}</td>
          <td>
            {lastActivityDate} à {lastActivityTime}
          </td>
        </tr>
      );
    });
  }
};
export { ResultScore };
