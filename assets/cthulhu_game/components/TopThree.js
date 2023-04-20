import React from 'react';

const TopThree = ({ players }) => {
  // Trier les joueurs en fonction du nombre de parties gagnées et afficher les trois premiers
  const topThreePlayers = players.sort((a, b) => b.gamesWon - a.gamesWon).slice(0, 3);

  return (
    <div className="top-three">
      <h3>Top 3</h3>
      <ol>
        {topThreePlayers.map((player) => (
          <li key={player.id}>
            <strong>{player.name}</strong> - {player.gamesWon} parties gagnées
          </li>
        ))}
      </ol>
    </div>
  );
};

export {TopThree};
