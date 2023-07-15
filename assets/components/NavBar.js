import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPlayCircle, FiBarChart2, FiMenu, FiX } from 'react-icons/fi'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={"navBar"}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FiX size={24}/> : <FiMenu size={24}/>}
      </button>
      <ul className={isOpen ? 'open' : ''}>
        <li>
          <Link className={"link"} to="/" onClick={() => setIsOpen(false)}>
            <FiPlayCircle /> Nouvelle partie
          </Link>
        </li>
        <li>
          <Link className={"link"} to="/scoreboard" onClick={() => setIsOpen(false)}>
            <FiBarChart2 /> Tableau des scores
          </Link>
        </li>
      </ul>
    </div>
  )
}

export { NavBar }
