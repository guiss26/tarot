import './CardContentDetail.css'

const CardContentDetail = () => {
    return (
        <>
            <div className="card-content-detail">
                <div className='card-tarot-description'>
                    <h4 className='title-tarot-card'>Tarot</h4>
                    <img className='img-card-tarot' src="public\base-card-tarot.PNG" alt="card-img" />
                    <p className='title-tarot'>La Sacerdotiza</p>
                    <p className='description-tarot'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi temporibus eligendi suscipit laudantium labore laborum architecto. Adipisci quaerat, tenetur, provident perferendis voluptatem perspiciatis illum eligendi cupiditate officia neque natus assumenda.</p>

                </div>
                <div className='card-scientist-description'>
                    <h4 className='title-scientist-card'>Diosa Contemporánea</h4>
                    <img className='img-card-scientist' src="public\base-card-tarot.PNG" alt="card-img" />
                    <p className='title-scientist'>La Sacerdotiza</p>
                    <p className='description-scientist'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi temporibus eligendi suscipit laudantium labore laborum architecto. Adipisci quaerat, tenetur, provident perferendis voluptatem perspiciatis illum eligendi cupiditate officia neque natus assumenda.</p>
                </div>
            </div>
        </>
    )
}

export default CardContentDetail