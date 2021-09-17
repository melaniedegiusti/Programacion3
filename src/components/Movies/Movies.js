import React, { Component } from 'react'
import Card from '../Card/Card';
import "./movies.css"
import FilterField from '../FilterField/FilterField';

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
                    originales: data.results,
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
    eliminarTarjeta(trj){
        this.setState({
            peliculas: this.state.peliculas.pop(trj)
        })
    }
    
    
    componentDidMount(){
       this.ApiCall('https://api.themoviedb.org/3/movie/popular?api_key=c40a745984e9eb09a7b68f074f0aa025&language=en-US&page='+ this.state.vueltas)

    }
    componentDidUpdate(){
        
    }

    borrarTarjeta(id){
        // console.log(id);
        const resto = this.state.peliculas.filter( pelicula => pelicula.id !== id);
        this.setState({
            peliculas: resto,
        })
    }

    reset(){
        this.setState({
            peliculas: this.state.originales,
        })
    }
    
    filtrarPeliculas(textoFiltrar){
        let peliculasFiltradas = this.state.originales.filter(pelicula => pelicula.title.toLowerCase().includes(textoFiltrar.toLowerCase()));
        this.setState({
            peliculas: peliculasFiltradas,
        })
    }
    
    render() {
        
        let contenido;

        if(this.state.peliculas === "") {
            contenido = <p>Cargando...</p>
        } else {
            contenido = <div className="cards">
            {this.state.peliculas.map( (pelicula) => (
                <>
                <Card 
                key={pelicula.id} 
                datosPelicula={pelicula} 
                borrar={(peliculaBorrar)=>this.borrarTarjeta(peliculaBorrar)}
                />
                </>
            ))}
        </div>
        }
        return (
            <>
            <div className="buscador">
                <FilterField filtrarPeliculas={(param)=>this.filtrarPeliculas(param)} />
            </div>
            {contenido}
            <button onClick={()=>this.agregarPeliculas()} className="masPeliculas">Mas Peliculas</button>
            <button onClick={()=>this.reset()} className="reset">Reset</button>
            </>
        );
    }

}

export default Movies