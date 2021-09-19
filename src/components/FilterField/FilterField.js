import React, { Component } from 'react';
import "./filterField.css"

class FilterField extends Component {
    constructor(props){
        super(props)

        this.state = {
            filterBy: "",
        }
    }

    enviarSubmit(e){
        e.preventDefault();
    }

    controlCambios(e){
        this.setState({
            filterBy: e.target.value
        }, ()=> this.props.filtrarPeliculas(this.state.filterBy));

    }

    render() {
        return (
            <form onSubmit={this.enviarSubmit}> 
                {/* <label> Filter cards: </label>  */}
                <input 
                type="text" 
                name="name" 
                onChange={(e)=> this.controlCambios(e)}
                value={this.state.filterBy}
                placeholder="Buscar pelicula.."
                className="input"
                />
            </form>
        );
    }



}

export default FilterField;