import './Header.css';
import logo from './img/logo.png';
function Header() {
    return (
        <header class="header">
            <nav>
                <div class="nav_logo-text">
                    <img src={logo} alt="" class="logo-nav"/>
                        <p class="text-logo-header">Mil <br/> huellitas</p>
                </div>

                <input type="checkbox" id="check"/>
                    <label for="check" class="bar-btn">
                        <i class="fa-solid fa-bars"></i>
                    </label>

                    <ul class="nav_menu-items">
                        <li><a href="#">INICIO</a></li>
                        <li><a href="#">ADOPCIÓN</a></li>
                        <li><a href="#">DONACIÓN</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">ALIADOS</a></li>
                    </ul>
            </nav>
        </header>
    )
}

export default Header