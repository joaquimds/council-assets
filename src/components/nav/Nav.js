import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Search from '../search/Search'

import './Nav.scss'

class Nav extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
    this.dropdownRef = React.createRef()
  }

  componentDidMount () {
    this.clickListener = (e) => this.handleClick(e)
    document.addEventListener('mousedown', this.clickListener, false)
  }

  componentWillUnmount () {
    if (this.clickListener) {
      document.removeEventListener('mousedown', this.clickListener, false)
    }
  }

  handleClick (e) {
    if (this.dropdownRef.current && !this.dropdownRef.current.contains(e.target)) {
      this.setState({ open: false })
    }
  }

  toggleMenu () {
    this.setState({ open: !this.state.open })
  }

  render () {
    const { open } = this.state

    const links = [
      <li className='nav__link' key='/'>
        <Link to='/'>Home</Link>
      </li>,
      <li className='nav__link' key='/about'>
        <Link to='/about'>About</Link>
      </li>,
      <li className='nav__link' key='/more-info'>
        <a className='nav__link' href='#' target='_blank'>Have info on sales?</a>
      </li>,
      <li className='nav__link' key='/locality'>
        <a className='nav__link' href='https://locality.org.uk/' target='_blank'>Know a space under threat?</a>
      </li>
    ]

    return (
      <nav className='nav'>
        <div className='nav__logo'>
          <a href='https://www.thebureauinvestigates.com' target='_blank' title='The Bureau of Investigative Journalism'>
            <img src='/icons/tbij.jpg' alt='The Bureau of Investigative Journalism' />
          </a>
        </div>
        <div className='nav__search'>
          <Search small />
        </div>
        <ul className='nav__links'>
          {links}
        </ul>
        <div className='nav__mobile' ref={this.dropdownRef}>
          <button type='button' onClick={() => this.toggleMenu()}>Menu</button>
          <ul className={'nav__dropdown' + (open ? ' nav__dropdown--open' : '')}>
            {links}
          </ul>
        </div>
      </nav>
    )
  }
}

export default Nav
