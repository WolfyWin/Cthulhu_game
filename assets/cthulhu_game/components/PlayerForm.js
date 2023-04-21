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
    if ( player1 === "" || player2 === "" ) {
      alert("Vous devez sélectionner deux joueurs !");
      return;
    }

    // On vérifie que les deux joueurs ne sont pas les mêmes
    if (player1 === player2) {
      alert("Les deux joueurs ne peuvent pas être les mêmes !");
      return;
    }

    // On vérifie que les nouveaux joueurs n'existent pas déjà en base de données
    if (
      (isNewPlayer1 && players.some((p) => p.name === player1)) ||
      (isNewPlayer2 && players.some((p) => p.name === player2))
    ) {
      alert('Ces noms de joueurs existent déjà, veuillez en choisir d\'autres.');
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

  const handlePlayer1Change = (event) => {
    if (event.target.value === 'new') {
      setIsNewPlayer1(true);
      setPlayer1('');
    } else {
      setIsNewPlayer1(false);
      setPlayer1(event.target.value);
    }
  };

  const handlePlayer2Change = (event) => {
    if (event.target.value === 'new') {
      setIsNewPlayer2(true);
      setPlayer2('');
    } else {
      setIsNewPlayer2(false);
      setPlayer2(event.target.value);
    }
  };

  return (
    <div className="player-form-container">
      <form onSubmit={handleFormSubmit} className="player-form">
          <label htmlFor="player1">
            Joueur 1
            {isNewPlayer1 ? (
              <input type="text" value={player1} onChange={(event) => setPlayer1(event.target.value)} />
            ) : (
              <select className="player" value={player1} onChange={handlePlayer1Change}>
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
            <input type="text" value={player2} onChange={(event) => setPlayer2(event.target.value)} />
          ) : (
            <select className="player" value={player2} onChange={handlePlayer2Change}>
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
