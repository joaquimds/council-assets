import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { focusPlace } from '../../actions'
import { encodeCouncil } from '../../util'

import './Map.scss'

const RED = 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
const BLUE = 'https://maps.google.com/mapfiles/ms/icons/blue-dot.png'

class Map extends Component {
  constructor (props) {
    super(props)
    this.mapRef = React.createRef()
    this.markers = []
  }

  componentDidMount () {
    this.initMap()
  }

  componentDidUpdate (prevProps) {
    if (!this.map) {
      return
    }
    if (this.props.places !== prevProps.places) {
      this.updateMap()
      return
    }
    this.updateFocusedMarker()
  }

  initMap () {
    this.map = new window.google.maps.Map(this.mapRef.current, {
      center: { lat: 54.2, lng: -3.5 },
      zoom: 6,
      maxZoom: 17
    })
    this.updateMap()
  }

  updateMap () {
    const { places, focusedPlace } = this.props
    const placesWithLocation = places.filter(p => p.latitude && p.longitude)
    this.markers.forEach(marker => marker.setMap(null))
    this.markers = placesWithLocation.map(sale => {
      const title = sale.name || sale.address
      const icon = (sale.id === focusedPlace) ? BLUE : RED
      const marker = new window.google.maps.Marker({
        title,
        map: this.map,
        position: { lat: sale.latitude, lng: sale.longitude },
        icon
      })
      marker.set('id', sale.id)
      marker.addListener('mouseover', () => this.setFocused(sale.id))
      marker.addListener('mouseout', () => this.setFocused(null))
      marker.addListener('click', () => this.goToPlace(sale))
      return marker
    })
    this.panToMarkers(placesWithLocation)
  }

  updateFocusedMarker () {
    const { focusedPlace } = this.props
    for (const marker of this.markers) {
      const icon = (marker.get('id') === focusedPlace) ? BLUE : RED
      marker.setIcon(icon)
    }
  }

  goToPlace (sale) {
    const council = encodeCouncil(sale.council)
    this.props.history.push(`/${council}/${sale.id}`)
  }

  panToMarkers (places) {
    if (!places || !places.length) {
      return
    }
    if (places.length === 1) {
      this.map.setCenter({ lat: places[0].latitude, lng: places[0].longitude })
      this.map.setZoom(14)
      return
    }

    let north = null
    let east = null
    let south = null
    let west = null
    for (const sale of places) {
      if (!north || sale.latitude > north) {
        north = sale.latitude
      }
      if (!south || sale.latitude < south) {
        south = sale.latitude
      }
      if (!east || sale.longitude > east) {
        east = sale.longitude
      }
      if (!west || sale.longitude < west) {
        west = sale.longitude
      }
    }
    if (north && south && east && west) {
      this.map.fitBounds({ north, south, east, west })
    }
  }

  setFocused (id) {
    this.props.focusPlace(id)
  }

  render () {
    return (
      <div className='map'>
        <div ref={this.mapRef} className='map__container'/>
      </div>
    )
  }
}

const mapStateToProps = ({ focusedPlace }) => ({ focusedPlace })
const mapDispatchToProps = (dispatch) => ({
  focusPlace: (id) => dispatch(focusPlace(id))
})

const MapContainer = withRouter(connect(mapStateToProps, mapDispatchToProps)(Map))

export default MapContainer

