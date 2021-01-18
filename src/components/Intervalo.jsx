import './Intervalo.css';
import Card from './Card';

import { connect } from 'react-redux'
import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/number'

const Intervalo = (props) => {

    const { valorMinimo, valorMaximo } = props

    return (

        <Card title="Intervalo de Números" red>
            <span>
                <strong>Mínimo: </strong>
                <input type="number"
                    value={valorMinimo}
                    onChange={(min)=>{props.changeMin(+min.target.value)}} />
            </span>
            <span>
                <strong>Máximo: </strong>
                <input type="number"
                    value={valorMaximo}
                    onChange={(max)=>{props.changeMax(+max.target.value)}}/>
            </span>
        </Card>
    );
}

function mapStateToProps(state) {
    return {
        valorMinimo: state.numeros.min,
        valorMaximo: state.numeros.max
    }
}

 
function mapDispatchToProps(dispatch) {
    return {
        changeMin(newNumber) {
            const action = alterarNumeroMinimo(newNumber)
            dispatch(action)
        },
    
        changeMax(newNumber) {
            const action = alterarNumeroMaximo(newNumber)
            dispatch(action)
        }

    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps)(Intervalo);