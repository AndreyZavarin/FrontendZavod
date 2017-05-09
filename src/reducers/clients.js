/**
 * Created by zawar on 09.05.2017.
 */
import {
    UPDATE_CLIENT_LIST
} from '../constants/App'

export default function clients(state = {allClientsList: null}, action) {
    switch (action.type){
        case UPDATE_CLIENT_LIST:
            return {...state, allClientsList: action.data}
        default:
            return state
    }
}