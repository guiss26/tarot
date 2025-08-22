import { Link } from 'react-router-dom'
import './CardsTarot.css'
import ReadingButton from "../components/ReadingButton"
import { getAllCards } from '../services/TarotServices'
import { useState, useEffect } from 'react'

const CardsTarot = () => {
    /** PETICIÓN API - GET */
    const [tarotCards, setTarotCards] = useState([])//crea un estado llamado tarotCards que empieza con un array vacío.Aquí se guardarán la lista de las card que vienen de la API
    const [loading, setLoading] = useState(true)//Sirve para mostrar un mensaje de "Cargando..." mientras se obtienen los datos

    useEffect(() => {
        const fetchData = async () => {//vamos a hacer una llamada a la API
            try {
                const data = await getAllCards()//obtener los datos de las cartas usando la función getAllCards()
                setTarotCards(data)
            } catch (error) {
                console.error('Error al cargar cartas tarot: ', error)
            } finally {//Cuando termina (haya ido bien o mal), se pone 'loading' en 'false' -> ya no está cargando
                setLoading(false)
            }
        }

        fetchData()//LLama a la función fetchData para empezar a obtener los datos cuando el cuando el componente se monta.
    }, [])//El [] vacío le dice a useEffect que solo ejecute esto *una vez* al principio

    return (
        <>
            <section className="cards-tarot-content">
                <div className="text-descripction-cards-tarot">
                    <h2 className="subtitle-cards-tarot">Descubre las Diosas Contemporáneas de la Ciencia y la Tecnología</h2>
                    <p className="paragraph-cards-tarot">Haz clic en cualquier carta para ver su detalle</p>
                    {/* <ReadingButton></ReadingButton> */}
                </div>

                <div className="cards-box h-screen centered">
                    {tarotCards.map((cardTarot) => (
                    <div key={cardTarot.id} className="card-tarot-s card-t">
                        {/* front */}
                        <div className="card-face front-card-img front">
                            <img className='img-card' src="/base-card-tarot.PNG" alt="tarot-card" />
                        </div>

                        {/* back */}
                        <div className="card-face back-card-img-api back">
                            <Link to={`/carta-detalle/${cardTarot.id}`}><img className='img-card' src={cardTarot.arcaneImage.imageSrc} alt={cardTarot.arcaneName} /></Link>
                            {/**{`/carta-detalle/${cardTarot.id}`} añadir cardTarot.map */}
                        </div>
                    </div>
                    ))} 
                </div>
            </section>
        </>
    )
}

export default CardsTarot