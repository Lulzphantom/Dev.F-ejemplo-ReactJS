// Importar React
import React from 'react';

// Importar estilos
import './Card.css';

// Componente funcional 'Card'
const Card = (props) => {

    // Deconstruir props
    const { titulo, descripcion, color } = props;

    // Render del componente
    return (
        <div className={`card ${color}`}>
            <span>
                {titulo}
            </span>            
            <span role='img' aria-label='emoji'>🐱‍👤</span>
            <p>
                {descripcion}
            </p>
        </div>
    );
}

// Exportar el componente
export default Card;
