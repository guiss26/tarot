import { Link } from 'react-router-dom'
import './CardsTarot.css'
const CardsTarot = () => {
    return (
        <>
            <section className="cards-tarot-content">
                <div className="text-descripction-cardsTarot">
                    {/* <h2>Descubre lo que el tarot tiene para ti</h2> */}
                    <h2>Descubre las Diosas Contemporáneas de la Ciencia y la Tecnología</h2>
                    <p>Haz clic en cualquier carta para ver su detalle</p>
                    <Link>Hacer una lectura</Link>
                </div>
                <div className="cards-box">
                    <div className="card"></div>
                </div>
            </section>
        </>
    )
}

export default CardsTarot