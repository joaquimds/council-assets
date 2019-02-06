import { UPDATE_FILTER } from '../constants'

const filter = (state = {}, action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, ...action.filter }
    default:
      return state
  }
}

export default filter
