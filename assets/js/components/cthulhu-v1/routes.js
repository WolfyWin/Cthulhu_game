import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom'
import {History}                              from './components/History'
import {Game}                              from './components/Game'
import React                                          from 'react'

const BoardGame = () => {
  return (
    <Router>
      <div className={"navBar"}>
        <ul>
          <li>
            <Link className={"link"} to="/">
              Play
            </Link>
          </li>
          <li>
            <Link className={"link"}  to="history">
              History
            </Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}

export {BoardGame};
