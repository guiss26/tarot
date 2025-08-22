import './CardContentDetail.css'
import { getOneCard } from '../services/TarotServices'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CardContentDetail = () => {
    /** PETICIÓN API - GET */
    const { id } = useParams() //Para obtener el ID desde la URL
    const [oneCard, setOneCard] = useState(null) //Empieza con null mientras se carga
    const [loading, setLoading] = useState(true) //Indica si la carta todavía se está cargando. Se pone en false cuando termina la carga
    
    useEffect(() => {
        const fetchCard = async () => {
            // try {
            //     const data = await getOneCard(id)
            //     setOneCard(data)
            // } catch (error) {
            //     console.error('Error cargando la carta: ', error)
            // } finally {
            //     setLoading(false) //Para que React sepa que ya terminó la carga
            // }

            const data = await getOneCard(id)
            setOneCard(data)
            setLoading(false)
        }
        fetchCard() //Se llama a la función para empezar a obtener los datos cuando el componente se monta.
    }, [id]) //El [id] indica que se ejecuta este efecto cuando el componente se monta o si cambia el ID

    if (loading) return <></> //Mientras la carta se esté cargando, se muestre el mensaje.
    if (!oneCard) return <p>No se encontró la carta</p> //Si no se encontró nada, se muestre este otro mensaje
    return (
        <>
            <article className="card-content-detail">
                <div className='card-tarot-description scroll-bar-style'>
                    <h4 className='title-tarot-card'>Tarot</h4>
                    <img className='img-card-tarot' src={oneCard.arcaneImage.imageSrc} alt={oneCard.arcaneName} />
                    <p className='title-tarot'>Significado</p>
                    <p className='description-tarot'>{oneCard.arcaneDescription}</p>

                </div>
                <div className='card-scientist-description scroll-bar-style'>
                    <h4 className='title-scientist-card'>Diosa Contemporánea</h4>
                    <img className='img-card-scientist' src={oneCard.goddessImage.imageSrc} alt={oneCard.goddessName} />
                    <p className='title-scientist'>{oneCard.goddessName}</p>
                    <p className='description-scientist'>{oneCard.goddessDescription}</p>
                </div>
            </article>
        </>
    )
}

export default CardContentDetail