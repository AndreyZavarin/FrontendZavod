import {
    AUTHORIZATION_ADMIN
} from '../constants/App'

export default function authorization(state = {authorization: false, token: null}, action) {
    switch (action.type){
        case AUTHORIZATION_ADMIN:
            return {...state, token: action.data.token, authorization: true}
        default:
            return state
    }
}

// export default function userstate(state = initialState, action) {
//
//   // switch (action.type) {
//   //
//   //   case LOGIN_REQUEST:
//   //     // TODO
//   //     return state
//   //
//   //   case LOGIN_SUCCESS:
//   //     return {...state, name: action.payload.name, isAuthenticated: action.payload.isAuthenticated}
//   //
//   //   case LOGIN_FAIL:
//   //     // TODO
//   //     return state
//   //
//   //   case LOGOUT_SUCCESS:
//   //     // TODO
//   //     return state
//   //
//   //   default:
//   //     return state
//   //   }
// }
