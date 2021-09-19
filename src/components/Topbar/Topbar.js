import React, { Component } from 'react'
import './topbar.css'
import FilterField from '../FilterField/FilterField';


class Topbar extends Component {
    constructor(props){
        super(props)
        this.state = {
            changeButton: false,
            text: "horizontal"
        }
    }
    viewMore(evento){
        if (this.state.changeButton) {
            this.setState({
                changeButton: false,
                text: 'horizontal'
            });
        } else{
            this.setState({
                changeButton: true,
                text: 'Vertical'
            });
        }

        
    }

    render() {
        return(
            <>
            <nav className='header'>
                <div className="titulo">
                    <h1 className="nombre"> MOVIECOM</h1>
                    <img src="logo.png" className="logo"></img>
                </div>
                      
                <div className='header2'>
                    <div className="buscador">
                        <img src="formato.jpg" onClick={()=>this.props.cambiarFormato()} className="formato"></img>
                        <FilterField filtrarPeliculas={(textoAFiltrar)=> this.props.filtrarPeliculas(textoAFiltrar)} />
                    </div> 
                </div>
            </nav>
            </>
        )
    }

}

export default Topbar;