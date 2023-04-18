import React from 'react'
import ReactDOM from 'react-dom'
import {store} from './store/store'
import {Provider} from "react-redux"
import {Game} from './components/Game'
import {NavBar} from './components/NavBar'
import {History} from './components/History'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/css/style.css'
const BoardGame = () => {
  return (
    <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Game />} />
          <Route path="history" element={<History />} />
        </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <BoardGame />
  </Provider>
);
