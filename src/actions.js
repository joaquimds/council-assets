import { ALL_DATA_LOADED, ALL_YEARS, DATA_LOADED, FOCUS_PLACE, UPDATE_FILTER } from './constants'
import { parseDate } from './util'

export const loadAllData = () => {
  return async (dispatch) => {
    const response = await window.fetch(`${process.env.REACT_APP_API_ROOT}/las`)
    const json = await response.json()

    const councils = {}

    for (const council of json) {
      const { sales, yearOptions } = processSales(council.Sales, council.name)
      councils[council.name] = { ...council, sales, yearOptions }
    }
    dispatch({ type: ALL_DATA_LOADED, councils })
  }
}

export const loadData = (council) => {
  return async (dispatch) => {
    const param = encodeURIComponent(council)
    const response = await window.fetch(`${process.env.REACT_APP_API_ROOT}/las/${param}`)
    const json = await response.json()

    const { sales, yearOptions } = processSales(json.sales, council)

    dispatch({ type: DATA_LOADED, council, data: { ...json, sales, yearOptions } })
  }
}

function processSales (data, council) {
  const sales = []
  const yearOptions = [ALL_YEARS]
  for (const sale of data) {
    const latitude = parseFloat(sale.latitude) || null
    const longitude = parseFloat(sale.longitude) || null
    const type = sale.type ? (sale.type.substring(0, 1).toUpperCase() + sale.type.substring(1)) : ''
    const salePrice = parseInt(sale.salePrice, 10) || null
    const { year } = parseDate(sale.dateOfDisposal)
    if (year && yearOptions.indexOf(year) === -1) {
      yearOptions.push(year)
    }
    sales.push({ ...sale, latitude, longitude, type, salePrice, council })
  }
  yearOptions.sort()
  return { sales, yearOptions }
}

export const focusPlace = (id) => {
  return { type: FOCUS_PLACE, id }
}

export const updateFilter = (filter) => {
  return { type: UPDATE_FILTER, filter }
}