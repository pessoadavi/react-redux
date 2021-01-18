import {
    CHANGEMIN,
    CHANGEMAX
} from '../actions/actionTypes.js'

const initialState = {
    min: 0,
    max: 0
}

export default function (state = initialState, action) {

    switch(action.type){

        case CHANGEMIN:
            return {
                ...state,
                min: action.payload
            }
        
        case CHANGEMAX:
            return {
                ...state,
                max: action.payload
            }

        default:
            return state
    }
} 