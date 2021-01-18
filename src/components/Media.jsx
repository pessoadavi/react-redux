import React from 'react';
import Card from './Card';

import { connect } from 'react-redux'  //Conecta o componente ao estado da aplicação

const Media = (props) => {

    const {minimo, maximo} = props

    function media (min, max) {

        return (min + max)/2

    }

    return (

        <Card title="Média" green>
            <span>
                <strong>Resultado: </strong>
                <strong>{media(minimo , maximo)}</strong>
            </span>
        </Card>
    );
}

function mapToStateToProps (state) {

    return {
        minimo: state.numeros.min,
        maximo: state.numeros.max
    }
}

/* O connect vai devolver o componente que tem ligação
   com o estado global da minha aplicação. Connect recebe
   como parametro uma função que fará o mapeamento  */
export default connect (mapToStateToProps) (Media) ;     