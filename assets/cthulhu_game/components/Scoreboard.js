import {NavBar} from './NavBar';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ResultScore} from './ResultScore';
import {TopThree} from './TopThree';

const Scoreboard = () => {
  // Récupérer les données des joueurs depuis le store
  const dispatch = useDispatch();
  const players = useSelector((state) => state.allPlayers);

  // Charger les données des joueurs depuis l'API
  useEffect(() => {
    if (!players) {
      fetch('/api/players')
        .then((response) => response.json())
        .then((data) => {
          // sort players by number of victories except the 3 first

          data.sort((a, b) => b.gamesWon - a.gamesWon);
          dispatch({ type: 'ALL_PLAYERS', payload: data});

        });
    }
  }, [dispatch, players]);

  // Afficher le tableau des scores
  return (
    <div>
      <NavBar />
      {players && <TopThree players={players} />}
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
          <ResultScore players={players} />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { Scoreboard };
