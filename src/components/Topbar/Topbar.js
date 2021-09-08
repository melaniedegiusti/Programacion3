import React from 'react';
import './topbar.css';

function Topbar(){
    return(
        <nav className='header'>
            <h1> "Nombre de la app"</h1>

            <div className='header2'>
                <p> Ordenar ASC / DESC</p>
                <p>
                    fotos
                </p>
                <p>
                    buscador
                </p>
            </div>
        </nav>
    )
}

export default Topbar