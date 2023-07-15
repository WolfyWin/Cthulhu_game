import React from 'react'
import {FiClock, FiAward, FiPlayCircle } from 'react-icons/fi'
import {GiOctopus} from 'react-icons/gi'

const ResultScore = ({ players }) => {
  if (!players) {
    return (
      <tr>
        <td colSpan="4">Chargement...</td>
      </tr>
    )
  }

  if (players.length === 0) {
    return (
      <tr>
        <td colSpan="4">Aucun joueur trouvé !</td>
      </tr>
    )
  }

  return players.map(({ id, name, gamesPlayed, gamesWon, lastActivity }) => {
    const { timestamp } = lastActivity;
    const lastActivityDate = new Date(timestamp * 1000).toLocaleDateString('fr')
    const lastActivityTime = new Date(timestamp * 1000).toLocaleTimeString('fr')

    return (
      <div className="player-card" key={id}>
        <div className="player-img">
          <GiOctopus className="octo"/>
        </div>
        <div className="card-info">
          <h2>{name}</h2>
          <p><FiPlayCircle /> Parties jouées : {gamesPlayed}</p>
          <p><FiAward /> Parties gagnées : {gamesWon}</p>
          <p><FiClock /> Dernière activité : {`${lastActivityDate} à ${lastActivityTime}`}</p>
        </div>
      </div>
    )
  })
}

export { ResultScore }
