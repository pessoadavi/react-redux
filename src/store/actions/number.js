import {
    CHANGEMIN,
    CHANGEMAX
} from './actionTypes'

// Action creators
export function alterarNumeroMinimo(newNumber){

    return {
        type: CHANGEMIN,
        payload: newNumber
    }
}

export function alterarNumeroMaximo(newNumber){

    return {
        type: CHANGEMAX,
        payload: newNumber
    }
}