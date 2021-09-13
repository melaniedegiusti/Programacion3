import React, { Component } from 'react'
import Card from '../Card/Card';
import "./movies.css"

class Movies extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
        }
    }
    ApiCall(url) {
        fetch(url)
            .then( respuesta => respuesta.json() )
            .then(data => {
                console.log(data);
                this.setState({
                    peliculas: data.results,
                })
            })
            .catch( err => console.log(err))
    }
    componentDidMount(){
       this.ApiCall('https://api.themoviedb.org/3/movie/popular?api_key=c40a745984e9eb09a7b68f074f0aa025')
    }


    agregarMas(){
        // FALTA PARA AGREGAR MAS PELICULAS
    }
    
    render() {
        console.log('renderizado')
        console.log(this.state.peliculas)
        
        let contenido;

        if(this.state.peliculas == "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <div className="cards">
            {this.state.peliculas.map( (pelicula) => (
                <Card key={pelicula.id} datosPelicula={pelicula} />
            ))}
        </div>
        }
        return (
            <>
            {contenido}
            <button onClick={()=>this.agregarMas()}>Mas Peliculas</button>
            </>
        );
    }

}

export default Movies