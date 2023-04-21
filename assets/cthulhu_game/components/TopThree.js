import React from 'react';

const TopThree = ({ players }) => {
  // Trier les joueurs en fonction du nombre de parties gagnées et afficher les trois premiers
  const topThreePlayers = players.sort((a, b) => b.gamesWon - a.gamesWon).slice(0, 3);

  return (
    <div className="top-three">
      <ul>
        {topThreePlayers.map((player, index) => (
          <li key={player.id}>
            <div className="podium">
              {index === 0 && <img src="images/first.png" alt="first-place"  className="first-place" />}
              {index === 1 && <img src="images/second.png" alt="second-place" className="second-place" />}
              {index === 2 && <img src="images/third.png" alt="third-place" className="third-place" />}
            </div>
            <div className="name-winner">
              <strong>{player.name}</strong>
            </div>
            <div className="number-games">
              {player.gamesWon} parties gagnées
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export {TopThree};
