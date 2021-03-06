import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import { LOCAL_AUTHORITIES } from '../../constants'
import { decodeCouncil, encodeCouncil } from '../../util'

import './Search.scss'

const getInitialSearch = (props) => {
  const { location: { pathname } } = props
  if (!pathname || pathname.length < 2) {
    return ''
  }
  let council = pathname.split('/')[1]
  council = decodeCouncil(council)
  if (LOCAL_AUTHORITIES.indexOf(council) > -1) {
    return council
  }
  return ''
}

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = { search: getInitialSearch(props), suggestions: [], error: '', focus: false }
    this.searchRef = React.createRef()
  }

  componentDidMount () {
    this.clickListener = (e) => this.handleClickOutside(e)
    document.addEventListener('mousedown', this.clickListener)
  }

  componentDidUpdate (prevProps) {
    const prevSearch = getInitialSearch(prevProps)
    const search = getInitialSearch(this.props)
    if (prevSearch !== search) {
      this.setState({ search })
    }
  }

  componentWillUnmount () {
    document.removeEventListener('mousedown', this.clickListener)
  }

  handleClickOutside (e) {
    if (this.searchRef.current.contains(e.target)) {
      return
    }
    this.setState({ focus: false })
  }

  renderSuggestions () {
    if (!this.state.suggestions || !this.state.suggestions.length || !this.state.focus) {
      return null
    }

    const items = this.state.suggestions.map(council => (
      <li key={council} className='search__suggestion'>
        <button type='button' onClick={() => this.chooseCouncil(council)}>{council}</button>
      </li>
    ))

    return (
      <ul className='search__suggestions'>
        {items}
      </ul>
    )
  }

  chooseCouncil (council) {
    sendSearchEvent('local-authority-search', council)
    this.navigate(council)
  }

  navigate (council) {
    // remove the error if search is successful
    this.setState({ search: council, focus: false, error: '' })
    const param = encodeCouncil(council)
    this.props.history.push(`/${param}`)
  }

  onFocus () {
    this.setState({ focus: true })
  }

  onChange (e) {
    const search = e.target.value
    const suggestions = LOCAL_AUTHORITIES.filter(la => {
      return la.toLowerCase().indexOf(search.trim().toLowerCase()) > -1
    })
    this.setState({ search, suggestions })
  }

  async onSubmit (e) {
    e.preventDefault()

    let { suggestions, search } = this.state

    if (suggestions.length) {
      search = suggestions[0]
      this.chooseCouncil(search)
      return
    }

    if (!isPostcode(search)) {
      this.setState({ error: 'We couldn\'t find this postcode or council' })
      return
    }

    try {
      sendSearchEvent('postcode-search', search.toUpperCase())
      search = await this.lookup(search)
      this.navigate(search)
    } catch (e) {
      this.setState({ error: 'We couldn\'t find this postcode' })
    }
  }

  async lookup (search) {
    const response = await window.fetch('https://api.postcodes.io/postcodes/' + encodeURIComponent(search))
    const json = await response.json()
    const name = json && json.result && json.result.admin_district
    if (!name) {
      throw new Error()
    }
    const foundName = LOCAL_AUTHORITIES.find(council => {
      return council.toLowerCase() === name.toLowerCase()
    })
    if (!foundName) {
      throw new Error()
    }
    return foundName
  }

  render () {
    const { error, search } = this.state
    return (
      <form className='search' onSubmit={e => this.onSubmit(e)} ref={this.searchRef}>
        <input id='search' type='text' autoComplete='off' placeholder='Council / Postcode' onClick={() => this.onFocus()}
               onChange={e => this.onChange(e)} value={search} onFocus={() => this.onFocus()} />
        {this.renderSuggestions()}
        <small>{error}</small>
      </form>
    )
  }
}

const isPostcode = (value) => {
  value = value.toLowerCase().trim()
  const postcodeRegex = /^[A-Z]{1,2}[0-9][0-9A-Z]?\s?[0-9][A-Z]{2}$/ig
  const matches = value.match(postcodeRegex)
  return matches && matches.length
}

const sendSearchEvent = (type, label) => {
  window.gtag('event', type, {
    event_category: 'engagement',
    event_label: label
  })
  window.gtag('event', 'search', {
    event_category: 'engagement',
    event_label: label
  })
}

export default withRouter(Search)
