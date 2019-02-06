import moment from 'moment'
import { ALL_YEARS } from './constants'

export const encodeCouncil = (council) => {
  council = council.replace(/ /g, '_')
  return encodeURIComponent(council)
}

export const decodeCouncil = (council) => {
  council = decodeURIComponent(council)
  return council.replace(/_/g, ' ')
}

export const parseDate = (str) => {
  if (!str) {
    return { year: 0, month: 0, day: 0 }
  }
  let date = moment(str, 'DD-MM-YYYY')
  if (!date.isValid()) {
    date = moment(str, 'MM-YYYY')
  }
  if (!date.isValid()) {
    return { year: 0, month: 0, day: 0 }
  }
  return { year: date.year(), month: date.month(), day: date.date() }
}

export const formatCurrency = (gbp) => {
  if (!gbp) {
    return '£0'
  }
  let str = String(gbp)
  let withCommas = ''
  while (str.length > 3) {
    const last3chars = str.substring(str.length - 3, str.length)
    str = str.substring(0, str.length - 3)
    withCommas = `,${last3chars}${withCommas}`
  }
  withCommas = `${str}${withCommas}`
  return `£${withCommas}`
}

export const filterPlaces = (places, { selectedYear, search }) => {
  const filteredByYear = places.filter(sale => {
    const { year } = parseDate(sale.dateOfDisposal)
    return selectedYear === ALL_YEARS || year === selectedYear
  })

  if (!search) {
    return filteredByYear
  }

  return filteredByYear.filter(sale => {
    const body = [
      sale.name,
      sale.address,
      sale.postcode,
      sale.soldTo,
      sale.dateOfDisposal,
      sale.disposalType
    ].filter(Boolean).join(' ').toLowerCase()
    return body.indexOf(search.toLowerCase()) > -1
  })
}
