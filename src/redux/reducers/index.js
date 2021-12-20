import { combineReducers } from 'redux'

import filtetsReducer from './filters'
import pizzasReducer from './pizzas'

const rootReducer = combineReducers({
  filtets: filtetsReducer,
  pizzas: pizzasReducer
})

export default rootReducer