// Importar react
import React from 'react';

// Importar componentes
import Title from './components/Title/Title';
import Card from './components/Card/Card';

// Importar estilos
import './App.css';

// Componente functional App
const App = () => {
    
    // Codigo del componente



    // Render del componente
    return (
        <div>
        
            <Title />
            
            <div className="cintas"> 
                <Card 
                    titulo={'Cinta blanca'}
                    descripcion={'Crea tu propio sitio web y conoce los conceptos fundamentales de la programación.'}
                    color={'blanca'}
                />
                <Card 
                    titulo={'Cinta roja'}
                    descripcion={'Desarrolla aplicaciones web robustas utilizando la arquitectura Cliente-Servidor.'}
                    color={'roja'}
                />
                <Card 
                    titulo={'Cinta negra'}
                    descripcion={'Desarrolla las habilidades de un ingeniero de software y fortalece tus capacidades de trabajo en equipo para obtener un empleo.'}
                    color={'negra'}
                />
            </div>
        </div>
        
    );
}

export default App;
