import {
    UPDATE_ACTIVE_PAGE
} from '../constants/App'

export default function router(state = {activePage: null, }, action) {
    switch (action.type){
        case UPDATE_ACTIVE_PAGE:
            return {...state, activePage: action.data}
        default:
            return state
    }
}
