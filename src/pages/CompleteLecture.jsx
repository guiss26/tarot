import CardsLectureCompleted from '../components/CardsLectureCompleted'
import './CompleteLecture.css'

const CompleteLecture = () => {
    return (
        <>
        <section className="lecture-completed">
            <div className='title-lecture'>
                <h2>💫 ¡Lectura completada! 💫</h2>
                <p>Esto es lo que te dicen las cartas</p>
            </div>
            <CardsLectureCompleted></CardsLectureCompleted>
            <p className='foot-text'>🪐 "El universo siempre responde, si sabes escuchar."</p>
        </section>
        </>
    )
}

export default CompleteLecture