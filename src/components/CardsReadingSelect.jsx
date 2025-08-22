import './CardsReadingSelect.css'

const placeholder = "/base-card-tarot.PNG" //carta vacía de public

const CardsReadingSelect = ({ selectedCards }) => {
    const renderSlot = (card, label) => (
        <div className='card-choice'>
            <figure>
                {card ? (
                    <img className='img-card-choice' src={card.image} alt={card.name} />
                ) : (
                    // <div className="empty-card">?</div>
                    <img className='img-card-choice' src={placeholder} alt="placeholder" style={{ opacity: 0.3}}/>
                )}
                {/* <img className='img-card-choice' src="" alt="card-present" /> */}
            </figure>
            <figcaption>Pasado</figcaption>
        </div>
    )


    //---
    return (
        <>
            <div className='box-select-cards'>
                {renderSlot(selectedCards?.pasado, "Pasado")}
                {renderSlot(selectedCards?.presente, "Presente")}
                {renderSlot(selectedCards?.futuro, "Futuro")}

                {/* <div className='card-choice'>
                    <figure>
                        {selectedCards.pasado ? (
                            <img className='img-card-choice' src={selectedCards.pasado.image} alt={selectedCards.pasado.name} />
                        ) : (
                            <div className="empty-card">?</div>
                        )}
                    </figure>
                    <figcaption>Pasado</figcaption>
                </div>

                <div className='card-choice'>
                    <figure>
                        {selectedCards.presente ? (
                            <img className='img-card-choice' src={selectedCards.presente.image} alt={selectedCards.presente.name} />
                        ) : (
                            <div className="empty-card">?</div>
                        )}
                    </figure>
                    <figcaption>Presente</figcaption>
                </div>
                <div className='card-choice'>
                    <figure>
                        {selectedCards.futuro ? (
                            <img className='img-card-choice' src={selectedCards.futuro.image} alt={selectedCards.futuro.name} />
                        ) : (
                            <div className="empty-card">?</div>
                        )}
                    </figure>
                    <figcaption>Futuro</figcaption>
                </div> */}
            </div>
        </>
    )
}

export default CardsReadingSelect