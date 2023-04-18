import { Provider } from 'react-redux'
import React   from 'react'
import ReactDOM from 'react-dom'
import {store} from './store/store'
import './assets/css/style.css'
import {BoardGame}    from './routes'

const root = document.getElementById('root')

ReactDOM.render(<Provider store={store}><BoardGame /></Provider>, root)

