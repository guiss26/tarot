import './CarouselCards.css'
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getAllCards } from '../services/TarotServices'


const cards = [//ver como adaptar esto de la API
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
]

const CarouselCards = () => {//ver como adaptar esto de la API
    /** PETICIÓN API - GET */
    const [tarotCards, setTarotCards] = useState([])//crea un estado llamado tarotCards que empieza con un array vacío.Aquí se guardarán la lista de las card que vienen de la API
    const [loading, setLoading] = useState(true)//Sirve para mostrar un mensaje de "Cargando..." mientras se obtienen los datos
    const [currentCards, setCurrentCards] = useState(0) //índice actual

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

    // const [currentCards, setCurrentCards] = useState(0)

    const prevCard = () => { //CORREGIR ESTO AL CONSULTAR A LA API
        setCurrentCards((prev) => (prev === 0 ? tarotCards.length - 1 : prev - 1))
    }

    const nextCard = () => {
        setCurrentCards((prev) => (prev === tarotCards.length - 1 ? 0 : prev + 1))
    }

    if (loading) return <p>Cargando cartas...</p>

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
                        return (
                            <div key={card.id || index} className={`card ${position === 0 ? "active" : ""}`} style={{ transform: `translateX(${(position - 1) * 220}px)` }}>
                                <img src="/base-card-tarot.PNG" alt={`Carta ${index}`} />
                            </div>
                        )
                    })}
                    {/* {cards.map((card, index) => {
                        const position = (index - currentCards + cards.length) % cards.length
                        return (
                            <div key={index} className={`card ${position === 0 ? "active" : ""}`} style={{ transform: `translateX(${(position - 1) * 220}px)` }}>
                                <img src={card} alt={`Carta ${index}`} />
                            </div>
                        )
                    })} */}
                </div>

                <button onClick={nextCard} className="arrow right">
                    <ChevronRight size={32}></ChevronRight>
                </button>
            </div>
        </>
    )
}

export default CarouselCards