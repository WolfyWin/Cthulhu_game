import React, { useState } from 'react'

const PlayerForm = () => {

  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('/api/players', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ player1, player2 }),
    });
    console.log(response);

    if (response.ok) {
      console.log('Players saved successfully!');
    } else {
      console.error('Error saving players:', response.statusText);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Player 1:
        <input
          type="text"
          value={player1}
          onChange={(event) => setPlayer1(event.target.value)}
        />
      </label>
      <br />
      <label>
        Player 2:
        <input
          type="text"
          value={player2}
          onChange={(event) => setPlayer2(event.target.value)}
        />
      </label>
      <br />
      <button>Start game</button>
    </form>
  );
}

export { PlayerForm };
