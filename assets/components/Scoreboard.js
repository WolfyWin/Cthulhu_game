import {NavBar} from './NavBar'
import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {ResultScore} from './ResultScore'
import {TopThree} from './TopThree'

const Scoreboard = () => {
  const dispatch = useDispatch();
  const allPlayers = useSelector((state) => state.allPlayers);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch('/api/players');
      const data = await response.json();
      dispatch({type: 'ALL_PLAYERS', payload: data.sort((a, b) => b.gamesWon - a.gamesWon)});
    }

    if (!allPlayers?.length) {
      fetchPlayers();
    }
  }, []);

  return (
    <div>
      <NavBar />
      {allPlayers && <TopThree players={allPlayers} />}
      <div className="scoreboard">
        <div className="scoreboard">
          <div className="card-container">
            {allPlayers && <ResultScore players={allPlayers} />}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Scoreboard };
