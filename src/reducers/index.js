import { combineReducers } from 'redux'

import councils from './councils'
import focusedPlace from './focusedPlace'
import filter from './filter'

const app = combineReducers({
  councils,
  focusedPlace,
  filter
})

export default app
