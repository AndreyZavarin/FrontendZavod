/**
 * Created by zawar on 09.05.2017.
 */
import {
    UPDATE_CLIENT_LIST,
    EDITING_CLIENT,
    GET_SINGLE_CLIENT
} from '../constants/App'

export default function clients(state = {allClientsList: null, clientData: null }, action) {
    switch (action.type){
        case UPDATE_CLIENT_LIST:
            return {...state, allClientsList: action.data}
        case EDITING_CLIENT:
            return {...state, clientData: action.data}
        case GET_SINGLE_CLIENT:
            return {...state, clientData: action.data}
        default:
            return state
    }
}

