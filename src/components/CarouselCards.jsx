import './CarouselCards.css'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";

const cards = [//ver como adaptar esto de la API
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
    "public\base-card-tarot.PNG",
]

const CarouselCards = () => {//ver como adaptar esto de la API
    const [currentCards, setCurrentCards] = useState(0)

    const prevCard = () => { //CORREGIR ESTO AL CONSULTAR A LA API
        setCurrentCards((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
    }

    const nextCard = () => {
        setCurrentCards((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
    }
    return (
        <>
            <div className="carousel">
                <button onClick={prevCard} className="arrow left">
                    <ChevronLeft size={32}></ChevronLeft>
                </button>

                {/* <img src={cards[currentCards]} alt="carta-actual" /> */}
                {/* Cartas */}
                <div className="carousel-cards">
                    {cards.map((card, index) => {
                        const position = (index - currentCards + cards.length) % cards.length
                        return (
                            <div key={index} className={`card ${position === 0 ? "active" : ""}`} style={{ transform: `translateX(${(position - 1) * 220}px)`}}>
                                <img src={card} alt={`Carta ${index}`} />
                            </div>
                        )
                    })}
                </div>

                <button onClick={nextCard} className="arrow right">
                    <ChevronRight size={32}></ChevronRight>
                </button>
            </div>
        </>
    )
}

export default CarouselCards