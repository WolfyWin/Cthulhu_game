import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className={"navBar"}>
      <ul>
        <li>
          <Link className={"link"} to="/">
            Nouvelle partie
          </Link>
        </li>
        <li>
          <Link className={"link"} to="/scoreboard">
            Tableau des scores
          </Link>
        </li>
      </ul>
    </div>
  );
}

export { NavBar }
