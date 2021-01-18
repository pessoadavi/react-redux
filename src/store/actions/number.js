import {
    CHANGEMIN,
    CHANGEMAX
} from './actionTypes'

export function alterarNumeroMinimo(newNumber){ // Action creator. Função que retorna um obj

    return {
        type: CHANGEMIN,                        // Isso é
        payload: newNumber                      // a action. Veja que é um obj devido {}
    }                                           // payload pode ser um array de obj's [{},{},{}]
}

export function alterarNumeroMaximo(newNumber){

    return {
        type: CHANGEMAX,
        payload: newNumber
    }
}