import React from 'react'
import "./card.css"

function Card(props) {
    console.log(props)
    const {poster_path, title, overview, release_date, original_language} = props.datosPelicula
    return(
        <div className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w342/${poster_path}`} /> 
            <div className="info">
            <h4>{title}</h4>
            <p>{overview}</p>
            <p>Idioma: {original_language}</p>
            <p>Fecha de estreno: {release_date}</p>
            <p className="more">Ver más</p>
            </div>
        </div>
    )
}

export default Card;

