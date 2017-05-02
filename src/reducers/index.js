import { combineReducers } from 'redux'

import {
    AUTHORIZATION_ADMIN
} from '../constants/App'

function authorization(state = {authorization: false, token: null}, action) {
    switch (action.type){
        case AUTHORIZATION_ADMIN:
            return {...state, token: action.data.token, authorization: true}
        default:
            return state
    }
}
/*
function dataLoanUsers(state = {dataLoan: null, status: false}, action) {
    switch (action.type){
        case UPDATE_DATA_LOAN:
            return {...state, dataLoan: action.data, status: true}
        default:
            return state
    }
}
*/
/*
function verificationForm(state = { hasWork : false, open : false}, action) {
    switch (action.type) {
        case BIDS_INFO:
          if(action.data.state === 'Processing') {
            if(state.hasWork) {
                return state
            } else {
                return { ...state, open: true, hasWork : true };
            }
          } else {
            //return Object.assign({}, state, {open: false, hasWork : false});
            return { ...state, open: false, hasWork : false};
          }
        case OPEN_APPLICATION:
          return { ...state, open: true };
        case COLLAPSE_APPLICATION:
          return { ...state, open: false };
        default:
          return state
    }
}
*/
/*
function bids(state = {
            availableBidsCount:0,
            deferredBidsCount:0,
            state: 'None',
            lastActionDate: null,
            loanBid: null
        }, action) {
  switch (action.type) {
    case BIDS_INFO:
      return action.data;
    case TAKE_BREAK:
      return { ...state, state: state.deferredBidsCount <= 0 ? 'Sleep' : 'AfterProcessing' };
    case REQUEST_APPLICATION:
      return { ...state, state: 'Waiting' };
    default:
      return state
  }
}
*/
const appReducer = combineReducers({
    authorization
})

export default appReducer
