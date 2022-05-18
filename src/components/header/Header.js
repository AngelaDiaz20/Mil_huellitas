import './Header.css'
import Logo from './logo.png'

function Header(){
 return(
    /*Características del componente*/
    <header>
        <div class="logo">
            <img src={Logo}></img>
        </div>
        <div>
            <button class="btn-azul"><i></i>Ingresar</button>
            <button class="btn-morado"><i></i>Registrar</button>
        </div>
    </header>
 );
}

export default Header;