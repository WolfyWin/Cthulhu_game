import React from 'react';

function PlayerSelect({ label, value, onChange, isNewPlayer, onNewPlayerChange, players })
{
  const handlePlayerChange = (event) => {
    const { value } = event.target;
    if (value === "new") {
      onNewPlayerChange();
    } else {
      onChange(value);
    }
  };

  return (
    <label htmlFor={label}>
      {label}
      {isNewPlayer ? (
        <input type="text" value={value} onChange={(event) => onChange(event.target.value)} />
      ) : (
        <select className="player" value={value} onChange={handlePlayerChange}>
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
  );
}

export { PlayerSelect };
