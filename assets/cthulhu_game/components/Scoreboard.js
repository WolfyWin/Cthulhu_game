import {NavBar} from './NavBar';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ResultScore} from './ResultScore';
import {TopThree} from './TopThree';

const Scoreboard = () => {
  // Récupérer les données des joueurs depuis le store
  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state.allPlayers);

  // Charger les données des joueurs depuis l'API
  useEffect(() => {
    // if ( allPlayers.length === 0 ) {
      fetch('/api/players')
        .then((response) => response.json())
        .then((data) => {
          data.sort((a, b) => b.gamesWon - a.gamesWon);
          dispatch({ type: 'ALL_PLAYERS', payload: data});
        });
    // }
  }, []);

  // Afficher le tableau des scores
  return (
    <div>
      <NavBar />
      {allPlayers && <TopThree players={allPlayers} />}
      <div className="scoreboard">
        <h2>Tableau des scores</h2>
        <table>
          <thead>
          <tr>
            <th>Nom</th>
            <th>Parties jouées</th>
            <th>Parties gagnées</th>
            <th>Dernière activité</th>
          </tr>
          </thead>
          <tbody>
          <ResultScore players={allPlayers} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Scoreboard };
