import { Provider } from 'react-redux'
import React   from 'react'
import ReactDOM from 'react-dom'
import {store} from './components/cthulhu-v1/store/store'
import './components/cthulhu-v1/assets/css/style.css'
import {BoardGame}    from './components/cthulhu-v1/routes'

const root = document.getElementById('root')

ReactDOM.render(<Provider store={store}><BoardGame /></Provider>, root)
