import React, {useEffect, useState} from 'react'
import {useDispatch} from  'react-redux'
import { useNavigate} from 'react-router-dom'
import {PlayerSelector} from '../store/selectors/PlayerSelector'

const ALERT_MESSAGES = {
  TWO_PLAYERS_REQUIRED: "Vous devez sélectionner deux joueurs !",
  SAME_PLAYERS: "Les deux joueurs ne peuvent pas être les mêmes !",
  PLAYER_ALREADY_EXISTS: "Ces noms de joueurs existent déjà, veuillez en choisir d'autres."
};

const PlayerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [players, setPlayers] = useState([]);
  const [isNewPlayer1, setIsNewPlayer1] = useState(false);
  const [isNewPlayer2, setIsNewPlayer2] = useState(false);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('/api/players');
      const data = await response.json();
      setPlayers(data);
    };

    fetchPlayers();
  }, []);

  const handleFormSubmit = async event => {
    event.preventDefault();

    // On vérifie que les deux joueurs ont bien été renseignés
    if (player1 === '' || player2 === '') {
      alert(ALERT_MESSAGES.TWO_PLAYERS_REQUIRED);
      return;
    }

    // On vérifie que les deux joueurs ne sont pas les mêmes
    if (player1 === player2) {
      alert(ALERT_MESSAGES.SAME_PLAYERS);
      return;
    }

    // On vérifie que les nouveaux joueurs n'existent pas déjà en base de données
    if (
      (isNewPlayer1 && players.some(p => p.name === player1)) ||
      (isNewPlayer2 && players.some(p => p.name === player2))
    ) {
      alert(ALERT_MESSAGES.PLAYER_ALREADY_EXISTS);
      return;
    }

    // On enregistre les nouveaux joueurs s'ils existent
    await fetch('/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "player1": player1,
        "player2": player2
      }),
    });

    // On envoie les informations des joueurs sélectionnés au store Redux et on redirige vers le jeu
    dispatch({ type: 'ADD_PLAYERS', payload: { player1, player2 } });
    navigate('/play');
  };

  return (
    <div className="player-form-container">
      <form onSubmit={handleFormSubmit} className="player-form">
        <PlayerSelector
          label="Joueur 1"
          value={player1}
          onChange={setPlayer1}
          isNewPlayer={isNewPlayer1}
          onNewPlayerChange={() => setIsNewPlayer1(true)}
          players={players}
        />
        <br />
        <PlayerSelector
          label="Joueur 2"
          value={player2}
          onChange={setPlayer2}
          isNewPlayer={isNewPlayer2}
          onNewPlayerChange={() => setIsNewPlayer2(true)}
          players={players}
        />
        <button className="start-game-btn" type="submit">START</button>
      </form>
    </div>
  );
};

export { PlayerForm };
