import { FOCUS_PLACE } from '../constants'

const focusedPlace = (state = null, action) => {
  switch (action.type) {
    case FOCUS_PLACE:
      return action.id
    default:
      return state
  }
}

export default focusedPlace
