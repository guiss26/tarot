import CardsReadingSelect from '../components/CardsReadingSelect'
import './CardReading.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCards from '../components/CarouselCards';

const CardReading = () => {
    const [selectedCards, setSelectedCards] = useState({
        pasado: null,
        presente: null,
        futuro: null
    })

    const [step, setStep] = useState(0) //controla el orden de selección 0=pasado, 1=presente, 2=futuro, 3=fin

    //función que se pasa al carrusel
    const handleSelectCard = (card) => {
        if (!card) return
        if (step === 0) {
            setSelectedCards((prev) => ({ ...prev, pasado: card }))
            setStep(1)
        } else if (step === 1) {
            setSelectedCards((prev) => ({ ...prev, presente: card }))
            setStep(2)
        } else if (step === 2) {
            setSelectedCards((prev) => ({ ...prev, futuro: card }))
            setStep(3) //ya completado
        }
    }

    const resetReading = () => {
        setSelectedCards({ pasado: null, presente: null, futuro: null })
        setStep(0)
    }
    return (
        <>
            <section className="card-reading-section-select">
                <div className='title-reading-content'>
                    <h2>✨ Lectura de cartas ✨</h2>
                    <p>¿Qué energías te rodean?</p>
                    <p>
                        {step === 0 && "Escoge una carta para: Pasado"}
                        {step === 1 && "Escoge una carta para: Presente"}
                        {step === 2 && "Escoge una carta para: Futuro"}
                        {step === 3 && "Lectura completada"}
                    </p>
                </div>
                
                <CardsReadingSelect selectedCards={selectedCards}></CardsReadingSelect>

                <div className='cards-select'>
                    <div className="text-btn-lecture">
                        {/* <p>Escoge una carta para: <span>Presente</span></p> */}
                        {/* <p>
                            {step === 0 && "Escoge una carta para: Pasado"}
                            {step === 1 && "Escoge una carta para: Presente"}
                            {step === 2 && "Escoge una carta para: Futuro"}
                            {step === 3 && "Lectura completada"}
                        </p> */}
                        <Link to="/lectura-completada" className='reading-button'>Finalizar lectura</Link>
                    </div>
                    <CarouselCards onSelectCard={handleSelectCard} disable={step >= 3}></CarouselCards>
                    <div className="buttons-box">
                        <button className='reading-button new-lecture-btn' onClick={resetReading}>Nueva lectura</button>
                        <Link to="/cartas-tarot" className='reading-button back-btn'>Volver a cartas</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardReading