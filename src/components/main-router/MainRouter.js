import React from 'react'
import { Route, Switch } from 'react-router-dom'

import CouncilContainer from '../council-container/CouncilContainer'
import About from '../about/About'
import Nav from '../nav/Nav'

import './MainRouter.scss'

const MainRouter = () => {
  return (
    <div className='main'>
      <Nav />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/:council' exact component={CouncilContainer} />
        <Route path='/:council/:place' component={CouncilContainer} />
      </Switch>
    </div>
  )
}

export default MainRouter
