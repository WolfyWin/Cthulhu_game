import React from 'react';

const TopThree = ({ players }) => {
  const firstPlaceImg = 'images/first.png';
  const secondPlaceImg = 'images/second.png';
  const thirdPlaceImg = 'images/third.png';

  if (!players || players.length === 0) {
    return <div>Aucun joueur trouvé</div>;
  }

  const topThreePlayers = players.sort((a, b) => b.gamesWon - a.gamesWon).slice(0, 3);

  return (
    <div className="top-three">
      <ul>
        {topThreePlayers.map((player, index) => (
          <li key={player.id}>
            <div className="podium">
              {index === 0 ? (
                <img src={firstPlaceImg} alt="first-place" className="first-place" />
              ) : index === 1 ? (
                <img src={secondPlaceImg} alt="second-place" className="second-place" />
              ) : (
                <img src={thirdPlaceImg} alt="third-place" className="third-place" />
              )}
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

export { TopThree };

