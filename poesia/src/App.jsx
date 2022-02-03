import React from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './paginas/home/Home'
import Galeria from './paginas/galeria/Galeria'

function App() {

  return (
    <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/Galeria'>
          <Galeria />
        </Route>
      
    </Router>
  )
}

export default App
