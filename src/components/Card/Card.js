import React, {Component} from 'react';
import "./card.css"
import { render } from 'react-dom';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            viewMore: false,
            text:'Ver más',
        }
    }

    viewMore(evento){
        if (this.state.viewMore) {
            this.setState({
                viewMore: false,
                text: 'Ver más'
            });
        } else{
            this.setState({
                viewMore: true,
                text: 'Ver menos'
            });
        }

        
    }
    
    render() {
        return(
            <div className='movie-card'>
                <img src={`https://image.tmdb.org/t/p/w342/${this.props.datosPelicula.poster_path}`} /> 
                <div className="info">
                <h4>{this.props.datosPelicula.title}</h4>
                <p>{this.props.datosPelicula.overview}</p>
                <div className={ this.state.viewMore ? '' : 'hide'}>
                <p>Idioma: {this.props.datosPelicula.original_language}</p>
                <p>Fecha de estreno: {this.props.datosPelicula.release_date}</p>
                </div>
                <p className="more" onClick={()=> this.viewMore()}>{this.state.text}</p>
                </div>
            </div>
        )
    }
}

export default Card;

