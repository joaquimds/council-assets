import React from 'react'
import { Link } from 'react-router-dom'

import { encodeCouncil, formatCurrency } from '../../util'
import Map from '../map/Map'

import './Place.scss'

const Place = (props) => {
  const { place } = props
  if (!place) {
    return (
      <div className='council'>
        <span className='council__loading'>Loading...</span>
      </div>
    )
  }
  return (
    <div className='place'>
      <Link href='#' className='back' to={'/' + encodeCouncil(place.council)}>
        <img src='/icons/back.svg' alt='Back.' />
      </Link>
      <div className='place__details'>
        {place.salePrice !== null ? (
          <div className='place__detail'>
            <label>sale price</label>
            <span className='place__stat'>{formatCurrency(place.salePrice)}</span>
          </div>
        ) : ''}
        {place.name ? (
          <div className='place__detail'>
            <label>name</label>
            <span>{place.name}</span>
          </div>
        ) : ''}
        {place.fullAddress && place.name !== place.fullAddress ? (
          <div className='place__detail'>
            <label>address</label>
            <span>{place.fullAddress}</span>
          </div>
        ) : ''}
        {place.type ? (
          <div className='place__detail'>
            <label>type</label>
            <span>{place.type}</span>
          </div>
        ) : ''}
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
        {place.disposalType ? (
          <div className='place__detail'>
            <label>disposal type</label>
            <span>{place.disposalType}</span>
          </div>
        ) : ''}
      </div>
      <div className='council__map'>
        <Map places={[place]} />
      </div>
    </div>
  )
}

export default Place
