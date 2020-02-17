import React, {Component} from 'react'

class Distribucion extends Component{

    render(){
        return(
            <div className="contenedorGrid">
                <header className="contenedorGrid__cabecera">
                    <nav className="contenedorGrid__cabecera__menu">{/* nav es una etiqueta semante html 5 para hacer referencia a un menu de navegacion */}
                        <div>Item 1</div>
                        <div>Item 2</div>
                        <div>Item 3</div>
                    </nav>
                </header>
                <aside className="contenedorGrid__aside1">

                </aside>
                <main className="contenedorGrid__main">

                </main>
                <aside className="contenedorGrid__aside2"></aside>
                <footer class="contenedorGrid__pie"></footer>
            </div>
        )
    }

} 

export default Distribucion