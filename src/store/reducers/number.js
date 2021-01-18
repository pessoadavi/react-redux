import {
    CHANGEMIN,
    CHANGEMAX
} from '../actions/actionTypes.js'

const initialState = {      // isso é um estado (pode ser array, obj, etc...)
    min: 0,
    max: 0
}

export default function (state = initialState, action) {    // Reducers

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