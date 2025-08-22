import { Accordion } from "@mui/material"
import ReadingButton from "../components/ReadingButton"
import './Home.css'
import { useState } from "react"
import AccordionHome from "../components/AccordionHome"
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <>
            <section className="tarot-img-descrip">
                <h1 className="home-title">✨ Descubre lo que el tarot tiene para ti ✨</h1>
                <img className="img-tarot" src="public\tarot-mistico-img.png" alt="tarot-mistico" />
                <h2 className="home-subtitle">Conecta con la energía del pasado, presente y futuro con una simple tirada de 3 cartas</h2>

                <div className="buttons-home">
                    {/* <ReadingButton /> */}
                    <Link to="/cartas-tarot" className='reading-button back-btn btn-cards-home'>Ver cartas</Link>
                </div>
            </section>
            <section className="instructions">
                {/* <AccordionHome></AccordionHome> */}
                <p className="paragraph-home">🪐"El universo siempre responde, si sabes escuchar."</p>
            </section>

        </>
    )
}

export default Home