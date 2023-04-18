import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={"navBar"}>
      <ul>
        <li>
          <Link className={"link"} to="/">
            Jeu
          </Link>
        </li>
        <li>
          <Link className={"link"} to="/scoreboard">
            Tableau des scores
          </Link>
        </li>
        <li>
          <Link className={"link"}  to="/history">
            Historique des tours
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { NavBar }
