import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { ALL_YEARS } from '../../constants'
import { focusPlace, updateFilter } from '../../actions'
import { encodeCouncil, filterPlaces, formatCurrency } from '../../util'
import Map from '../map/Map'

import './Council.scss'

class Council extends Component {
  constructor (props) {
    super(props)
    this.state = { sort: { direction: -1, property: 'salePrice' } }
  }

  componentDidMount () {
    this.props.updateFilter({ selectedYear: ALL_YEARS, search: '' })
  }

  onChangeYear (e) {
    const selectedYear = e.target.value === ALL_YEARS ? ALL_YEARS : parseInt(e.target.value, 10)
    this.props.updateFilter({ selectedYear })
  }

  onChangeFilter (e) {
    this.props.updateFilter({ search: e.target.value })
  }

  onChangeSort (sort) {
    this.setState({ sort: { ...this.state.sort, ...sort } })
  }

  getSalesForCurrentYear () {
    const { data } = this.props.council
    const { selectedYear } = this.props.filter
    return filterPlaces(data.sales, { selectedYear })
  }

  getFilteredSales () {
    const { data } = this.props.council
    const { selectedYear, search } = this.props.filter
    return filterPlaces(data.sales, { selectedYear, search })
  }

  onSelectNeighbour (e) {
    const name = e.target.value
    const encoded = encodeCouncil(name)
    this.props.history.push('/' + encoded)
  }

  render () {
    const { council: { data } } = this.props

    if (!data || !data.sales) {
      return (
        <div className='council'>
          <span className='council__loading'>Loading...</span>
        </div>
      )
    }

    const firstYear = data.yearOptions.length === 1 ? '2015' : data.yearOptions[0]
    const lastYear = data.yearOptions.length < 3 ? '2018' : data.yearOptions[data.yearOptions.length - 2]

    return (
      <div className='council'>
        {this.renderSummary(firstYear, lastYear, data.response)}
        <div className='council__map'>
          <Map places={data.sales} />
        </div>
        {this.renderNav()}
        {this.renderFilters()}
        {this.renderList()}
      </div>
    )
  }

  renderSummary (firstYear, lastYear, response) {
    const hasSummary = response.match(/full|partial/i)
    const hasTransactions = !response.match(/partial.*(transaction|transataction)/i)
    const sales = this.getSalesForCurrentYear()
    const stats = { count: sales.length, total: 0 }
    for (const sale of sales) {
      stats.total = stats.total + sale.salePrice
      if (!sale.salePrice) {
        stats.moreThan = true
      }
    }

    const { selectedYear } = this.props.filter
    let yearLabel = selectedYear
    if (yearLabel === ALL_YEARS) {
      yearLabel = firstYear
    }

    const { name } = this.props.council

    let summaryCopy = 'space' + (stats.count === 1 ? '' : 's')
    if (hasTransactions) {
      summaryCopy = summaryCopy + ' for' + (stats.moreThan ? ' more than' : '')
    }

    const introCopy = selectedYear === ALL_YEARS ? `Between ${firstYear} and ${lastYear}, ` : `In ${selectedYear}, `
    const introParts = [
      <span key={0}>{introCopy}</span>,
      <strong key={1}>{name} Council </strong>,
      <span key={2}>sold</span>
    ]

    const twitterShare = 'https://twitter.com/intent/tweet?&text=Public%20spaces%20are%20being%20%23' +
      'SoldFromUnderYou%20as%20councils%20struggle%20to%20stay%20afloat%2C%20%40bureaulocal%20found.' +
      '%20See%20what%27s%20been%20lost%20in%20' + name + '%3A&url=' + window.location.href

    return (
      <div className='summary'>
        {hasSummary ? (
          <span className='summary__row summary__label'>
            {introParts}
          </span>
        ) : ''}
        {hasSummary ? (
          <div className='summary__stats'>
            <span className='summary__stat'>{stats.count}</span>
            <span className='summary__label'>{summaryCopy}</span>
            {hasTransactions ? <span key='stat' className='summary__stat'>{formatCurrency(stats.total)}</span> : ''}
          </div>
        ) : ''}
        <span className='summary__row summary__label summary__response'>{getResponseCopy(name, response)}</span>
        <div className='summary__share-buttons'>
          <a className='twitter-share-button' href={twitterShare} target='_blank' title='Share on Twitter.' rel='noopener noreferrer'>
            <button title='Share on Twitter.'><img src='/icons/twitter.svg' alt='Share on Twitter.' /></button>
          </a>
          <a className='fb-xfbml-parse-ignore'
            href='https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Ftbij.com%2F&amp;src=sdkpreparse'
            target='_blank' title='Share on Facebook.' rel='noopener noreferrer'>
            <button title='Share on Facebook.'><img src='/icons/facebook.svg' alt='Share on Facebook.' /></button>
          </a>
        </div>
      </div>
    )
  }

  renderNav () {
    const { filter: { selectedYear }, council: { name, data } } = this.props
    const places = data.sales
    const neighbours = data.neighbours.map(n => n.name).sort()
    neighbours.unshift(name)

    return (
      <div className='council__nav'>
        {!places || !places.length ? '' : (
          <div className='council__results'>
            <p>Results for '{name}' in</p>
            <select value={selectedYear} onChange={e => this.onChangeYear(e)}>
              {data.yearOptions.map(year => <option key={year}>{year}</option>)}
            </select>
          </div>
        )}
        <div className='council__neighbours'>
          <p>See a neighbouring council</p>
          <select value={name} onChange={e => this.onSelectNeighbour(e)}>
            {neighbours.map(n => <option key={n}>{n}</option>)}
          </select>
        </div>
      </div>
    )
  }

  renderFilters () {
    const { sort } = this.state
    const { filter: { search }, council } = this.props
    const places = council.data.sales
    if (!places || !places.length) {
      return ''
    }
    return (
      <div className='filters'>
        <div className='filters__filter filters__search'>
          <label htmlFor='search'>Filter</label>
          <input id='search' type='text' value={search} onChange={e => this.onChangeFilter(e)} />
        </div>
        <div className='filters__group'>
          <div className='filters__filter filters__sort'>
            <label htmlFor='sort'>Sort</label>
            <select id='sort' value={sort.property} onChange={(e) => this.onChangeSort({ property: e.target.value })}>
              <option value='salePrice'>Sale Price</option>
              <option value='dateOfDisposal'>Date of Disposal</option>
              <option value='name'>Name</option>
              <option value='soldTo'>Sold to</option>
            </select>
          </div>
          <div className='filters__filter filters__direction'>
            <select id='direction' value={sort.direction}
              onChange={(e) => this.onChangeSort({ direction: e.target.value })}>
              <option value={1}>Ascending</option>
              <option value={-1}>Descending</option>
            </select>
          </div>
        </div>
      </div>
    )
  }

  renderList () {
    const { focusedPlace } = this.props
    const { sort } = this.state
    const places = this.getFilteredSales()
    const sorted = places.sort((a, b) => {
      const propA = a[sort.property]
      const propB = b[sort.property]
      return propA < propB ? sort.direction * -1 : sort.direction
    })
    return (
      <ul className='places'>
        {sorted.map(place => (
          <li key={place.id} className={'places__place' + (focusedPlace === place.id ? ' places__place--focused' : '')}
            onMouseEnter={() => this.props.focusPlace(place.id)}
            onMouseLeave={() => this.props.focusPlace(null)}>
            <div className='place__details'>
              <div className='place__detail-row'>
                <div className='place__detail'>
                  <label>name</label>
                  <span>{place.name || place.address}</span>
                </div>
                {place.salePrice ? (
                  <div className='place__detail'>
                    <label>sale price</label>
                    <span className='place__stat'>{formatCurrency(place.salePrice)}</span>
                  </div>
                ) : ''}
              </div>
              <div className='place__detail-row'>
                {place.soldTo ? (
                  <div className='place__detail'>
                    <label>sold to</label>
                    <span>{place.soldTo}</span>
                  </div>
                ) : ''}
                {place.dateOfDisposal ? (
                  <div className='place__detail'>
                    <label>date of disposal</label>
                    <span>{place.dateOfDisposal}</span>
                  </div>
                ) : ''}
              </div>
              <div className='place__detail-row'>
                {place.disposalType ? (
                  <div className='place__detail'>
                    <label>disposal type</label>
                    <span>{place.disposalType}</span>
                  </div>
                ) : ''}
              </div>
            </div>
            <div className='places__buttons'>
              <Link to={`/${encodeCouncil(place.council)}/${place.id}`}>view more info</Link>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

const getResponseCopy = (name, response) => {
  const template = getResponseCopyTemplate(response)
  if (template.indexOf('{name}') === -1) {
    return template
  }
  const templateParts = template.split('{name}')
  const copyParts = []
  for (let i = 0; i < templateParts.length; ++i) {
    copyParts.push(<span key={i}>{templateParts[i]}</span>)
    copyParts.push(<strong key={i + '-name'}>{name}</strong>)
  }
  copyParts.pop()
  return copyParts
}

const getResponseCopyTemplate = (response) => {
  switch (response.toLowerCase()) {
    case 'full':
      return 'This council provided everything requested.'
    case 'partial - no transaction info':
    case 'partial - no transataction info':
    case 'partial - no post code':
    case 'partial - no post codes':
    case 'partial - no post code or transaction info':
    case 'partial - no post code or transataction info':
      return 'This council only provided partial information. Details of sale price, and/or who the asset was sold or transferred to, and/or postcode information were incomplete.'
    case 'poor quality':
      return 'The quality of {name}\'s response was so poor that the information could not be meaningfully interpreted, and it has not responded to requests for clarification.'
    case 'no disposals':
      return '{name} responded to our request that it did not dispose of any assets during the period in question.'
    case 'awating internal review':
    case 'awaiting internal review':
    case 'internal review requested due to delay':
      return 'There were gaps or errors or delay in {name}\'s response. We have asked for our request to be reviewed internally.'
    case 'refused':
      return '{name} refused to provide any information.'
    default:
      return response
  }
}

const mapStateToProps = ({ focusedPlace, filter }) => ({ focusedPlace, filter })

const mapDispatchToProps = (dispatch) => ({
  updateFilter: (filter) => dispatch(updateFilter(filter)),
  focusPlace: (id) => dispatch(focusPlace(id))
})

const CouncilContainer = connect(mapStateToProps, mapDispatchToProps)(Council)

export default CouncilContainer
