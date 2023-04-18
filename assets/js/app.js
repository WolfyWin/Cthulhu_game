import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import React   from 'react';
import {store} from './components/cthulhu-v1/store/store'
import './assets/css/style.css';
import {BoardGame}    from './components/cthulhu-v1/routes'

const root = createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BoardGame />
  </Provider>
);
