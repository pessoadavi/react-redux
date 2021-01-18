import React from 'react';
import Card from './Card';

import { connect } from 'react-redux'

const Soma = (props) => {

    const { minimo, maximo } = props

    function soma(min, max) {
        
        return min + max
    }

    return (

        <Card title="Soma" purple>
            <span>
                <strong>Resultado: </strong>
                <strong>{soma(minimo, maximo)}</strong>
            </span>
        </Card>
    );
}

function mapToStateToProps(state) {
    return {
        minimo: state.numeros.min,
        maximo: state.numeros.max
    }

}

export default connect (mapToStateToProps) (Soma);