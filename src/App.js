import React, {Component} from 'react'
import SelectorAtributo from './SelectorAtributo.js'
import TrabajoConFormulario from './TrabajoConFormulario.js'
import Animaciones from './Animaciones.js'
import Distribucion from './Distribucion.js'
import Medidafr from './Medidafr.js'

class Aplicacion extends Component{

    render(){
        return(
            <div>
                <h1>Selector de Atributo</h1>
                <SelectorAtributo />
                <h1>Trabajo con Formularios</h1>
                <TrabajoConFormulario />
                <h1>Animaciones de altura</h1>
                <Animaciones />
                <h1>Distribucion de mediante grid-template-column</h1>
                <Distribucion/>
                <h1>Medida FR</h1>
                <Medidafr/>
            </div>
        )
    }
}

export default Aplicacion