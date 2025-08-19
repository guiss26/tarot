import { Link } from 'react-router-dom'
import './CardsTarot.css'
import ReadingButton from "../components/ReadingButton"
import TarotCard from '../components/TarotCard'

const CardsTarot = () => {
    return (
        <>
            <section className="cards-tarot-content">
                <div className="text-descripction-cards-tarot">
                    {/* <h2>Descubre lo que el tarot tiene para ti</h2> */}
                    <h2 className="subtitle-cards-tarot">Descubre las Diosas Contemporáneas de la Ciencia y la Tecnología</h2>
                    <p className="paragraph-cards-tarot">Haz clic en cualquier carta para ver su detalle</p>
                    <ReadingButton></ReadingButton>
                </div>
                <div className="cards-box">
                    <div className="card">
                        <Link to="/carta-detalle"><img className='img-card' src="public\base-card-tarot.PNG" alt="tarot-card" /></Link>
                        <Link to="/carta-detalle"><img className='img-card' src="public\base-card-tarot.PNG" alt="tarot-card" /></Link>
                        <Link to="/carta-detalle"><img className='img-card' src="public\base-card-tarot.PNG" alt="tarot-card" /></Link>
 
                        <Link to="/carta-detalle"><img className='img-card' src="public\base-card-tarot.PNG" alt="tarot-card" /></Link>
                        <Link to="/carta-detalle"><img className='img-card' src="public\base-card-tarot.PNG" alt="tarot-card" /></Link>
                        <Link to="/carta-detalle"><img className='img-card' src="public\base-card-tarot.PNG" alt="tarot-card" /></Link>

                        <TarotCard></TarotCard>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardsTarot