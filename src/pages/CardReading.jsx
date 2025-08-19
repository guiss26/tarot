import CardsReadingSelect from '../components/CardsReadingSelect'
import './CardReading.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from "lucide-react";
import CarouselCards from '../components/CarouselCards';

const CardReading = () => {
    return (
        <>
            <section className="card-reading-section-select">
                <div className='title-reading-content'>
                    <h2>✨ Lectura de cartas ✨</h2>
                    <p>¿Qué energías te rodean?</p>
                </div>
                <CardsReadingSelect></CardsReadingSelect>
                <div className='cards-select'>
                    <div className="text-btn-lecture">
                        <p>Escoge una carta para: <span>Presente</span></p>
                        <Link to="/lectura-completada" className='reading-button'>Finalizar lectura</Link>
                    </div>
                    <CarouselCards></CarouselCards>
                    <div className="buttons-box">
                        <button className='reading-button new-lecture-btn'>Nueva lectura</button>
                        <Link to="/cartas-tarot" className='reading-button back-btn'>Volver a cartas</Link>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardReading