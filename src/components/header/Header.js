import { Link } from 'react-router-dom';
import './Header.css';
import logo from './img/logo.png';
function Header() {
    return (
        <header class="header">
            <nav>
                <div class="nav_logo-text">
                    <img src={logo} alt="" class="logo-nav" />
                    <p class="text-logo-header">Mil <br /> huellitas</p>
                </div>

                <input type="checkbox" id="check" />
                <label for="check" class="bar-btn">
                    <i class="fa-solid fa-bars"></i>
                </label>

                <ul class="nav_menu-items">
                    <li><Link to="/" className='item'>INICIO</Link></li>
                    <li><Link to="/adopcion" className='item'>ADOPCIÓN</Link></li>
                    <li><Link to="/donacion" className='item'>DONACIÓN</Link></li>
                    <li><Link to="/blog" className='item'>BLOG</Link></li>
                    <li><Link to="/aliados" className='item'>ALIADOS</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header