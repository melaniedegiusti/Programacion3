import React, { Component } from 'react'
import Card from '../Card/Card';
import "./movies.css"

class Movies extends Component {
    constructor(){
        super()
        this.state = {
            peliculas: [],
            vueltas: 1,
        }
    }
    ApiCall(url) {
        fetch(url)
            .then( respuesta => respuesta.json() )
            .then(data => {
                    this.setState({
                    peliculas: data.results,
                })
            })
            .catch( err => console.log(err))
    }
    agregarPeliculas(){
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=c40a745984e9eb09a7b68f074f0aa025&language=en-US&page="+ (this.state.vueltas + 1))
            .then(respuesta=> respuesta.json())
            .then((data)=> {
                this.setState({
                peliculas: this.state.peliculas.concat(data.results),
                vueltas: this.state.vueltas + 1,
                })
            })
    }
    
    
    componentDidMount(){
       this.ApiCall('https://api.themoviedb.org/3/movie/popular?api_key=c40a745984e9eb09a7b68f074f0aa025&language=en-US&page='+ this.state.vueltas)

    }
    componentDidUpdate(){
        
    }
    

    
    render() {
        
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
            <button onClick={()=>this.agregarPeliculas()}>Mas Peliculas</button>
            </>
        );
    }

}

export default Movies