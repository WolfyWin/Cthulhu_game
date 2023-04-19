import React, {useEffect} from 'react'
import ReactDOM from 'react-dom'
import {store} from './store/store'
import {Provider} from "react-redux"
import {Game} from './components/Game'
import {NavBar} from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './assets/css/style.css'
import {PlayerForm} from "./components/PlayerForm";

const BoardGame = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Game />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
      <PlayerForm />
      <BoardGame />
  </Provider>
);
