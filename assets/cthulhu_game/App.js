import React from 'react'
import ReactDOM from 'react-dom/client'
import {store} from './store/store'
import {Provider} from "react-redux"
import {HashRouter, Route, Routes} from 'react-router-dom'
import {Game} from './components/Game'
import {PlayerForm} from './components/PlayerForm'
import {Scoreboard} from './components/Scoreboard'

import './assets/css/style.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<PlayerForm />} />
          <Route path="/play" element={<Game />} />
          <Route path="/scoreboard" element={<Scoreboard />} />
        </Routes>
      </HashRouter>
  </Provider>
);
