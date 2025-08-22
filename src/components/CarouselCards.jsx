import './CarouselCards.css'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllCards } from '../services/TarotServices'
import { data } from 'react-router-dom';


// const cards = [
//     "public\base-card-tarot.PNG",
//     "public\base-card-tarot.PNG",
//     "public\base-card-tarot.PNG",
//     "public\base-card-tarot.PNG",
//     "public\base-card-tarot.PNG",
//     "public\base-card-tarot.PNG",
// ]

const CarouselCards = ({ onSelectCard, disabled }) => {//ver como adaptar esto de la API
    /** PETICIÓN API - GET */
    const [tarotCards, setTarotCards] = useState([])//crea un estado llamado tarotCards que empieza con un array vacío.Aquí se guardarán la lista de las card que vienen de la API
    const [loading, setLoading] = useState(true)//Sirve para mostrar un mensaje de "Cargando..." mientras se obtienen los datos
    const [currentCards, setCurrentCards] = useState(0) //índice actual

    useEffect(() => {
        const fetchData = async () => {//vamos a hacer una llamada a la API
            try {
                const data = await getAllCards()//obtener los datos de las cartas usando la función getAllCards()

                const normalizeCards = data.map(cardApi => ({
                    id: cardApi.id,
                    name: cardApi.arcaneName,
                    image: cardApi.arcaneImage?.imageSrc, // ? evita error si no viene arcaneImage
                }))
                // setTarotCards(data)
                setTarotCards(normalizeCards)
            } catch (error) {
                console.error('Error al cargar cartas tarot: ', error)
            } finally {//Cuando termina (haya ido bien o mal), se pone 'loading' en 'false' -> ya no está cargando
                setLoading(false)
            }
        }

        fetchData()//LLama a la función fetchData para empezar a obtener los datos cuando el cuando el componente se monta.
    }, [])//El [] vacío le dice a useEffect que solo ejecute esto *una vez* al principio

    const prevCard = () => { 
        setCurrentCards((prev) => (prev === 0 ? tarotCards.length - 1 : prev - 1))
    }

    const nextCard = () => {
        setCurrentCards((prev) => (prev === tarotCards.length - 1 ? 0 : prev + 1))
    }

    const handleActiveCardClick = () => {
        if (disabled) return 
        const card = tarotCards[currentCard]
        onSelectCard?.(card) //enviamos la carta al padre
    }

    if (loading) return <p>Cargando cartas...</p>
    if (!tarotCards.length) return <p>No hay cartas.</p>

    return (
        <>
            <div className="carousel">
                <button onClick={prevCard} className="arrow left">
                    <ChevronLeft size={32}></ChevronLeft>
                </button>

                {/* Cartas */}
                <div className="carousel-cards">
                    {tarotCards.map((card, index) => {
                        const position = (index - currentCards + tarotCards.length) % tarotCards.length
                        const isActive = position === 0
                        return (
                            <div key={card.id} className={`card ${isActive ? "active clickable" : ""}`} style={{ transform: `translateX(${(position - 1) * 220}px)` }} onClick={isActive ? handleActiveCardClick : undefined}>
                                <img src="/base-card-tarot.PNG" alt={`Carta ${index}`} />
                                <p>{card.name}</p>
                            </div>
                        )
                    })}
                </div>

                <button onClick={nextCard} className="arrow right">
                    <ChevronRight size={32}></ChevronRight>
                </button>

                {/* <div className="select-buttons">
                    <button disabled={disabled} onClick={() => onSelectCard(tarotCards[currentCards])}>Elegir esta carta</button>
                </div> */}

            </div>
        </>
    )
}

export default CarouselCards