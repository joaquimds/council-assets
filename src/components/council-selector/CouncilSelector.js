import React, { Component } from 'react'
import { decodeCouncil, filterPlaces } from '../../util'
import { loadData } from '../../actions'
import { connect } from 'react-redux'

import Council from '../council/Council'
import Place from '../place/Place'
import Map from '../map/Map'
import MainColumns from '../main-columns/MainColumns'

class CouncilSelector extends Component {
  componentDidMount () {
    this.ensureData()
  }

  componentDidUpdate (prevProps, prevState) {
    if (prevProps.match !== this.props.match) {
      this.ensureData()
    }
  }

  ensureData () {
    const { name, data } = this.getCouncilData()
    if (!data || !data.sales) {
      this.props.loadData(name)
    }
  }

  getCouncilData () {
    const { match, councils: { directory } } = this.props
    const name = decodeCouncil(match.params.council)
    return { name, data: directory[name] }
  }

  getPlace () {
    const { data } = this.getCouncilData()
    const { match } = this.props
    if (match.params.place && data) {
      return data.sales.find(sale => String(sale.id) === match.params.place)
    }
  }

  getPlaces () {
    const place = this.getPlace()
    if (place) {
      return [ place ]
    }
    const { data } = this.getCouncilData()
    if (!data || !data.sales) {
      return []
    }
    return filterPlaces(data.sales, this.props.filter)
  }

  render () {
    const places = this.getPlaces()
    return (
      <MainColumns>
        {this.renderSidebar()}
        <Map places={places} />
      </MainColumns>
    )
  }

  renderSidebar () {
    const place = this.getPlace()
    if (place) {
      return <Place place={place} />
    }
    const council = this.getCouncilData()
    return <Council council={council} />
  }
}

const mapStateToProps = ({ councils, filter }) => ({ councils, filter })

const mapDispatchToProps = (dispatch) => ({
  loadData: (council) => dispatch(loadData(council))
})

const CouncilRouterContainer = connect(mapStateToProps, mapDispatchToProps)(CouncilSelector)

export default CouncilRouterContainer
