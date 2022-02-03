import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './paginas/Home/Home'
import Cabecalho from './components/Cabecalho'


function App() {

  return (
    <Router>
      <Cabecalho/>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/sobre'>
          
        </Route>
        <Route path='/eventos'>

        </Route>
        <Route path='/blog'>
          
        </Route>
        <Route path='/galeria'>
          
        </Route>
      
      </Switch>
    </Router>
  )
}

export default App
