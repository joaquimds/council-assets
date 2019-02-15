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
          <a href='https://www.thebureauinvestigates.com' title='The Bureau of Investigative Journalism'>
            <img src='/icons/tbij.svg' alt='The Bureau of Investigative Journalism.' />
          </a>
        </div>
        <div className='splash__copy'>
          <div className='splash__intro'>
            <h1>Our public spaces are being sold</h1>
            <p>Councils across the country are being forced to sell assets to pay for our services.</p>
            <p>See what your council has sold, or <Link to='/about'>read more</Link>.</p>
          </div>
          <div className='splash__search'>
            <Search />
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
