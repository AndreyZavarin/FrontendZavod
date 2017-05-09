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
