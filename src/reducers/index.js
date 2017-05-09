import { combineReducers } from 'redux'
import authorization from './authorization'
import clients from './clients'

export const rootReducer = combineReducers({
  authorization,
  clients
})
