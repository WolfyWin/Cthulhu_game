import React, {useEffect, useState} from 'react'
import {useDispatch} from  'react-redux'
import { useNavigate} from 'react-router-dom'

const PlayerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [players, setPlayers] = useState([]);
  const [isNewPlayer1, setIsNewPlayer1] = useState(false);
  const [isNewPlayer2, setIsNewPlayer2] = useState(false);
  const [newPlayerName1, setNewPlayerName1] = useState('');
  const [newPlayerName2, setNewPlayerName2] = useState('');

  // On récupère la liste des joueurs
  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('/api/players');
      const data = await response.json();
      setPlayers(data);
    };

    fetchPlayers();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On vérifie que les deux joueurs ont bien été renseignés
    if (!player1 || !player2) {
      alert("Vous devez sélectionner deux joueurs !");
      return;
    }

    // On vérifie que les deux joueurs ne sont pas les mêmes
    if (player1 === player2) {
      alert("Les deux joueurs ne peuvent pas être les mêmes !");
      return;
    }

    // On vérifie que les nouveaux joueurs ont des noms différents et n'existent pas en base de données
    if (isNewPlayer1 && isNewPlayer2 && (newPlayerName1 === newPlayerName2)) {
      alert("Les deux nouveaux joueurs ne peuvent pas avoir le même nom !");
      return;
    }

    // On vérifie que les nouveaux joueurs n'existent pas déjà en base de données
    if (
      (isNewPlayer1 && players.some((p) => p.name === newPlayerName1)) ||
      (isNewPlayer2 && players.some((p) => p.name === newPlayerName2))
    ) {
      alert('Ces noms de joueurs existent déjà, veuillez en choisir d\'autres.');
      return;
    }

    // On enregistre les nouveaux joueurs s'ils existent
    if (isNewPlayer1) {
      await fetch('/api/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newPlayerName1 }),
      });
    }
    if (isNewPlayer2) {
      await fetch('/api/players', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newPlayerName2 }),
      });
    }

    // On envoie les informations des joueurs sélectionnés au store Redux et on redirige vers le jeu
    dispatch({ type: 'ADD_PLAYERS', payload: { player1, player2 } });
    navigate('/play');
  };

  const handlePlayer1Change = (event) => {
    if (event.target.value === 'new') {
      setIsNewPlayer1(true);
      setIsNewPlayer2(false);
      setPlayer1('');
    } else {
      setIsNewPlayer1(false);
      setPlayer1(event.target.value);
    }
  };

  const handlePlayer2Change = (event) => {
    if (event.target.value === 'new') {
      setIsNewPlayer1(false);
      setIsNewPlayer2(true);
      setPlayer2('');
    } else {
      setIsNewPlayer2(false);
      setPlayer2(event.target.value);
    }
  };

  const handleNewPlayerName1Change = (event) => {
    setNewPlayerName1(event.target.value);
  };

  const handleNewPlayerName2Change = (event) => {
    setNewPlayerName2(event.target.value);
  };


  return (
    <div className="player-form-container">
      <form onSubmit={handleFormSubmit} className="player-form">
          <label htmlFor="player1">
            Joueur 1
            {isNewPlayer1 ? (
              <input type="text" value={newPlayerName1} onChange={(event) => setNewPlayerName1(event.target.value)} />
            ) : (
              <select value={player1} onChange={handlePlayer1Change}>
                <option value="">-- Sélectionnez un joueur --</option>
                {players.map((player) => (
                  <option key={player.id} value={player.name}>
                    {player.name}
                  </option>
                ))}
                <option value="new">Nouveau joueur</option>
              </select>
            )}
          </label>
        <br />
        <label htmlFor="player2">
          Joueur 2
          {isNewPlayer2 ? (
            <input type="text" value={newPlayerName2} onChange={(event) => setNewPlayerName2(event.target.value)} />
          ) : (
            <select value={player2} onChange={handlePlayer2Change}>
              <option value="">-- Sélectionnez un joueur --</option>
              {players.map((player) => (
                <option key={player.id} value={player.name}>
                  {player.name}
                </option>
              ))}
              <option value="new">Nouveau joueur</option>
            </select>
          )}
        </label>
        <button className="start-game-btn" type="submit">START</button>
      </form>
    </div>
  );
};

export { PlayerForm };
