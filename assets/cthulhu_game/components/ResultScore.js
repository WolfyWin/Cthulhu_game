import React from 'react'

const ResultScore = ({ players }) => {
  if (!players) {
    return (
      <tr>
        <td colSpan="4">Chargement...</td>
      </tr>
    );
  }

  if (players.length === 0) {
    return (
      <tr>
        <td colSpan="4">Aucun joueur trouvé !</td>
      </tr>
    );
  }

  return players.map(({ id, name, gamesPlayed, gamesWon, lastActivity }) => {
    const { timestamp } = lastActivity;
    const lastActivityDate = new Date(timestamp * 1000).toLocaleDateString('fr');
    const lastActivityTime = new Date(timestamp * 1000).toLocaleTimeString('fr');

    return (
      <tr key={id}>
        <td>{name}</td>
        <td>{gamesPlayed}</td>
        <td>{gamesWon}</td>
        <td>{`${lastActivityDate} à ${lastActivityTime}`}</td>
      </tr>
    );
  });
};

export { ResultScore };
