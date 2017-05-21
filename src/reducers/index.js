import { combineReducers } from 'redux'
import authorization from './authorization'
import clients from './clients'
import router from './router'
import products from './products'

export const rootReducer = combineReducers({
  authorization,
  clients,
  router,
  products,
})
