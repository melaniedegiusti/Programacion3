import React, { Component } from 'react'
import './topbar.css'
import FilterField from '../FilterField/FilterField';

function Topbar (){
    
        return(
            <>
            <nav className='header'>
                <h1> "Nombre de la app"</h1>
    
                <div className='header2'>
                    {/* <p> Ordenar ASC / DESC</p> */}
                    <p>
                        fotos
                    </p>
                    <div className="buscador">
                        <FilterField filtrarPeliculas={(param)=>this.filtrarPeliculas(param)} />
                    </div> 
                </div>
            </nav>
            </>
        )
    

}

export default Topbar;