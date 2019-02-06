import { DATA_LOADED, ALL_DATA_LOADED } from '../constants'

const councils = (state = { directory: {}, loaded: false }, action) => {
  switch (action.type) {
    case DATA_LOADED:
      const { directory } = state
      const council = action.council
      if (!directory[council]) {
        directory[council] = {}
      }
      directory[council] = action.data
      return { ...state, directory }
    case ALL_DATA_LOADED:
      return { directory: action.councils, loaded: true }
    default:
      return state
  }
}

export default councils
