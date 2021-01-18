import React from 'react';
import Card from './Card';

import {connect} from 'react-redux'

const Sorteio = (props) => {

    const {minimo, maximo} = props

    const draw = parseInt(Math.random()*(maximo-minimo) + minimo)

    return (

        <Card title="Sorteio" blue>
            <span>
                <strong>Resultado: </strong>
                <strong>{draw}</strong>
            </span>
        </Card>
    );
}

function mapToStateToProps(state){
    return {
        minimo: state.numeros.min,
        maximo: state.numeros.max
    }
}

export default connect (mapToStateToProps) (Sorteio) ;