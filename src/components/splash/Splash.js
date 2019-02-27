import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Search from '../search/Search'
import { loadAllData } from '../../actions'

import './Splash.scss'

class Splash extends Component {
  render () {
    return (
      <div className='splash'>
        <div className='splash__logo'>
          <a href='https://www.thebureauinvestigates.com' target='_blank' title='The Bureau of Investigative Journalism'>
            <img src='/icons/tbij.png' alt='The Bureau of Investigative Journalism.' />
          </a>
        </div>
        <div className='splash__copy'>
          <div className='splash__intro'>
            <h1>Sold From Under You</h1>
            <p>Libraries, playing fields and community centres are being lost to the local council funding crisis.</p>
            <p>See what your council has sold.</p>
          </div>
          <div className='splash__search'>
            <Search />
          </div>
          <div className='splash__intro'>
            <p><Link to='/about'>Read about the project</Link>.</p>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ councils }) => ({ councils })

const mapDispatchToProps = (dispatch) => ({
  loadAllData: () => dispatch(loadAllData())
})

const SplashContainer = connect(mapStateToProps, mapDispatchToProps)(Splash)

export default SplashContainer
