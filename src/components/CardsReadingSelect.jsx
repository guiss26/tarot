import './CardsReadingSelect.css'

const CardsReadingSelect = () => {
    return (
        <>
            <div className='box-select-cards'>
                <div className='card-choice'>
                    <figure>
                        <img className='img-card-choice' src="" alt="card-present" />
                    </figure>
                    {/* <img className='img-card-choice' src="public\base-card-tarot.PNG" alt="card-present" /> */}
                    <figcaption>Pasado</figcaption>
                </div>
                <div className='card-choice'>
                    <figure>
                        <img className='img-card-choice' src="" alt="card-present" />
                    </figure>
                    <figcaption>Presente</figcaption>
                </div>
                <div className='card-choice'>
                    <figure>
                        <img className='img-card-choice' src="" alt="card-present" />
                    </figure>
                    <figcaption>Futuro</figcaption>
                </div>
            </div>
        </>
    )
}

export default CardsReadingSelect