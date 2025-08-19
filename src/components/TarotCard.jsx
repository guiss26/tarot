import './TarotCard.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const TarotCard = () => {
    // const [cardName, setCardName] = useState("")

    // useEffect(() => {
    //     //Simulación de llamada a API
    //     setTimeout(() => {
    //         setCardName("La estrella")//Ej, el nombre que viene de la API
    //     }, 2000)
    // }, [])

    return (//VAS POR AQUIII
        <>
        <Link to="/carta-detalle"><img className='img-card' src="public\base-card-tarot.PNG" alt="tarot-card" /></Link>
        </>
    )
}

export default TarotCard