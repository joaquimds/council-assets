import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CouncilSelector from '../council-selector/CouncilSelector'
import About from '../about/About'
import Nav from '../nav/Nav'

import './MainRouter.scss'

const MainRouter = () => {
  return (
    <div className='main'>
      <Nav />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/:council' exact component={CouncilSelector} />
        <Route path='/:council/:place' component={CouncilSelector} />
      </Switch>
    </div>
  )
}

export default MainRouter
