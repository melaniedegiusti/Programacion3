import React from 'react'
import "./card.css"

function Card(props) {
    console.log(props)
    const {poster_path, title, overview, release_date} = props.datosPelicula
    return(
        <div className='movie-card'>
            <img src={`https://image.tmdb.org/t/p/w200/${poster_path}`} /> 
            <div className="info">
            <h4>{title}</h4>
            <p>{overview}</p>
            <p>{release_date}</p>
            </div>
        </div>
    )
}

export default Card;

