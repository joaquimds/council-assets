import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import './App.scss'

import Splash from '../splash/Splash'
import MainRouter from '../main-router/MainRouter'

const App = () => {
  const history = createBrowserHistory()
  history.listen((location) => {
    console.log('history update', location.pathname)
    window.gtag('config', 'UA-71078284-6', {
      'page_title': document.title,
      'page_path': location.pathname
    })
  })

  return (
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Splash}/>
        <Route path='/' component={MainRouter}/>
      </Switch>
    </Router>
  )
}

export default App
