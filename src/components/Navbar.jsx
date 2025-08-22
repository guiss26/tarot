import { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    return(
        <nav id='top'>
            <Link to="/" className="nav-title">🔮 TAROT MÍSTICO</Link>

            {/**Botón hambburguesa */}
            <button className="hamburguer-button" onClick={toggleMenu}>☰</button>

            <ul className={`menu ${isOpen ? "open" : ""}`}>
                <li className="menu-item">
                    <Link to="/" className="nav-link" onClick={() => setIsOpen(false)}>Inicio</Link>
                </li>
                <li className="menu-item">
                    <Link to="/cartas-tarot" className="nav-link" onClick={() => setIsOpen(false)}>Cartas</Link>
                </li>
                {/* <li className="menu-item">
                    <Link to="/lectura" className="nav-link" onClick={() => setIsOpen(false)}>Lectura</Link>
                </li> */}
            </ul>
        </nav>
    )
}

export default Navbar;