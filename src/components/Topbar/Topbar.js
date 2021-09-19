import React from 'react'
import './topbar.css'
import FilterField from '../FilterField/FilterField';

function Topbar (props){
    
        return(
            <>
            <nav className='header'>
                <div className="titulo">
                    <h1 className="nombre"> MOVIECOM</h1>
                    <img src="logo.png" className="logo"></img>
                </div>
                <div className='header2'>
                    <div className="buscador">
                        <FilterField filtrarPeliculas={(textoAFiltrar)=> props.filtrarPeliculas(textoAFiltrar)} />
                    </div> 
                </div>
            </nav>
            </>
        )
    

}

export default Topbar;