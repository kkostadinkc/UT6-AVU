import React, { Component } from 'react'
class TrabajoConFormulario extends Component {

    render() {
        return (
            <div>
                <form name="formulario1" id="formulario1id" action="">
                    <fieldset>
                        <legend>Formulario en React</legend>
                        <label for="campotexto1id">Nombre:</label>
                        <input type="text" name="campotexto1" id="campotexto1id" placeholder="Introduce tu nombre"></input><br />
                        <label for="campotexto2id">Busqueda:</label>
                        <input type="text" className="claseinput1"name="campotexto2" id="campotexto2id" placeholder="Término de busqueda"></input>
                    </fieldset>
                </form>
{/*                 <form>
                    <select id="discoid" name="selectdiscos">
                        <option value="hellfire">Edguy - Hellfire Club</option>
                        <option value="ecliptica">Sonata Arctica - Ecliptica</option>
                        <option value="karma">Kamelot -Karma</option>
                    </select>
                </form> */}
            </div>
        )
    }
}

export default TrabajoConFormulario