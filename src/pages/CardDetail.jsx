//importar el componente de la card, en el caso del proyecto anterior era la back card
import CardContentDetail from '../components/CardContentDetail'
import './CardDetail.css'
import { getOneCard } from '../services/TarotServices'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const CardDetail = () => {
    const { id } = useParams() //Para obtener el ID desde la URL
    const [oneCard, setOneCard] = useState(null) //Empieza con null mientras se carga
    const [loading, setLoading] = useState(true) //Indica si la carta todavía se está cargando. Se pone en false cuando termina la carga
    
    useEffect(() => {
        const fetchCard = async () => {
            try {
                const data = await getOneCard(id)
                setOneCard(data)
            } catch (error) {
                console.error('Error cargando la carta: ', error)
            } finally {
                setLoading(false) //Para que React sepa que ya terminó la carga
            }
        }

        fetchCard() //Se llama a la función para empezar a obtener los datos cuando el componente se monta.
    }, [id]) //El [id] indica que se ejecuta este efecto cuando el componente se monta o si cambia el ID

    if (loading) return <></> //Mientras la carta se esté cargando, se muestre el mensaje.
    if (!oneCard) return <p>No se encontró la carta</p> //Si no se encontró nada, se muestre este otro mensaje

    //----------
    return (
        <>
            <section className="card-detail-section">
                <div className="title-content">
                    <h3 className='title-detail'>🔮 {oneCard.arcaneName}</h3>
                    <p className='subtitle-detail'>Arcano #{oneCard.arcaneNumber}</p>
                </div>
                <CardContentDetail></CardContentDetail>
                <Link to="/cartas-tarot" className='reading-button back-btn'>Volver a cartas</Link>
                <p className='paragraph-detail'>🌙 "Las cartas no predicen el futuro, te muestran el camino."</p>
            </section>
        </>
    )
}

export default CardDetail