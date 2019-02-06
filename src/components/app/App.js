import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import './App.scss'

import Splash from '../splash/Splash'
import MainRouter from '../main-router/MainRouter'

const App = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={Splash} />
      <Route path='/' component={MainRouter} />
    </Switch>
  </Router>
)

export default App
