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
      </li>
    ]

    return (
      <nav className='nav'>
        <div className='nav__search'>
          <Search small/>
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
