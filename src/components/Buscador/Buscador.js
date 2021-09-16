import react, {Component} from  'react';

class Buscador extends Component {
    constructor(props){
        super(props);
        this.state  = {value:''};

    }
    enviarSubmit(evt) {
        evt.preventDefault();
        console.log(this.state.value)
      }

    controlCambios(evt){
        this.setState(
           { value: evt.target.value, }
        );
        console.log(this.state.value)
    }
    actualizar(props) {
        let resultados = props.filter(function(value){
            return this.props.datosPelicula.title = value;
        })
        console.log(resultados)
    }

    render(){
        return(
            <>
            <form onSubmit={(evt)=> this.enviarSubmit(evt) && this.actualizar()}>
                <label></label>
                <input
                type="text"
                name="busqueda"
                onChange={((evt)=> this.controlCambios(evt))}
                value={this.state.value}>
                </input>
                <button type="submit">Enviar</button>
            </form>
            </>
        );
    } 
}

export default Buscador;