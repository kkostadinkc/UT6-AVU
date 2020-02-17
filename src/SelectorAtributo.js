import React, {Component} from 'react'

/* import Imagen from 'react-image' */

class SelectorAtributo extends Component{

    render(){
        return(
            <div>
                <a href="https://www.google.com" rel="noopener noreferrer">Enlace a Google SIN target</a>
                <br />
                <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">Enlace a Google CON target</a>
                <br />
                <a href="https://www.google.com" target="_self" rel="noopener noreferrer">Enlace a Google CON target="_self"</a>
                <br />
                <img alt="Foto del K2" src={require('./img/k2invernal.jpg')}/>

                <p className="claseparrafo-1">Este párrafo tiene la clase="claseparrafo1"</p>
                <p className="claseselectorUno">Este párrafo tiene la clase="claseselectorUno"</p>
            </div>
        )
    }

}

export default SelectorAtributo