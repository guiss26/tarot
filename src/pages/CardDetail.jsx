//importar el componente de la card, en el caso del proyecto anterior era la back card
import CardContentDetail from '../components/CardContentDetail'
import './CardDetail.css'
import { Link } from 'react-router-dom'

const CardDetail = () => {
    return (
        <>
            <section className="card-detail-section">
                <div className="title-content">
                    {/* <h2>Detalle cartas</h2> */}
                    <h3 className='title-detail'>🔮 La sacerdotiza</h3>
                    <p className='subtitle-detail'>Arcano #1</p>
                </div>
                {/* <div className="card-content-detail">
                    <div className='card-tarot-description'></div>
                    <div className='card-scientist-description'></div>
                </div> */}

                <CardContentDetail></CardContentDetail>
                <Link to="/cartas-tarot" className='reading-button back-btn'>Volver a cartas</Link>
                <p className='paragraph-detail'>🌙 "Las cartas no predicen el futuro, te muestran el camino."</p>
            </section>
        </>
    )
}

export default CardDetail