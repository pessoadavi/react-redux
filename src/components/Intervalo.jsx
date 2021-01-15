import React from 'react';
import './Intervalo.css';
import Card from './Card';

const Intervalor = (props) => {
    return (
        <div className="Intervalo">
            <Card title="Intervalo de Números" red>
                <span>
                    <strong>Mínimo: </strong>
                    <input type="number" value={0} readOnly/>
                </span>
                <span>
                    <strong>Máximo: </strong>
                    <input type="number" value={10} readOnly/>
                </span>
            </Card>
        </div>
    );
}

export default Intervalor;