import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <nav id='top'>
            <Link to="/" className="nav-title">🔮 TAROT MÍSTICO</Link>
            <ul className="menu">
                <li className="menu-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="menu-item">
                    <Link to="/cartas-tarot" className="nav-link">Cartas</Link>
                </li>
                <li className="menu-item">
                    <Link to="/lectura" className="nav-link">Lectura</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;