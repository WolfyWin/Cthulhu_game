import React, { useState } from 'react'
import {useDispatch}       from 'react-redux'
import { useNavigate } from 'react-router-dom'

const PlayerForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // trim player names
    player1.trim();
    player2.trim();

    // check if the players have the same name
    if( player1 === player2 ) {
      alert('Les deux joueurs ne peuvent pas avoir le même nom !');
      return;
    }

    const response = await fetch('/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player1, player2 }),
    });

    if (response.ok)
    {
      // store the players in the state
      dispatch( { type: 'ADD_PLAYERS', payload: { player1, player2 } })

      // redirect to the game (react redirect doesn't work here)
      navigate('/play');
    }
    else
    {
      console.error('Error saving players:', response.statusText);
    }
  };
  // redirect to the home page if the user use directly the / url
  if (!location.hash.startsWith('#/')) {
    navigate('/');
  }

  return (
    <div className="player-form-container">
      <form onSubmit={handleFormSubmit} className="player-form">
        <label htmlFor="player1">
          Joueur 1 :
          <input
            type="text"
            id="player1"
            value={player1}
            required={true}
            onChange={(event) => setPlayer1(event.target.value)}
          />
        </label>
        <br />
        <label htmlFor="player2">
          Joueur 2 :
          <input
            type="text"
            id="player2"
            value={player2}
            required={true}
            onChange={(event) => setPlayer2(event.target.value)}
          />
        </label>
        <br />
        <button className="start-game-btn">START</button>
      </form>
    </div>
  );
}

export { PlayerForm };
