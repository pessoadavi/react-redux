import { createStore, combineReducers } from 'redux'
import numbersReducers from './reducers/number'

/* Reducers são responsáveis por gerar os estados. As actions ocorrem
   e são passadas aos reducers e estes geram novos estados. */
const reducers = combineReducers({
    numeros: numbersReducers})


// Função que configura um novo estado a partir dos reducers 
function storeConfig() {
    return createStore(reducers)}       

export default storeConfig 