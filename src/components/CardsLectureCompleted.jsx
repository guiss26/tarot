import CardContentDetail from './CardContentDetail'
import './CardsLectureCompleted.css'
import { Link } from 'react-router-dom'

const CardsLectureCompleted = () => {
    return (
        <>
            <article className="cards-lecture-box">
                <div className="box-card">
                    <h4>Pasado</h4>
                    <img src="public\base-card-tarot.PNG" alt="card-img-lecture" />
                    <p className='subtitle-lecture-tarot'>La sacerdotiza</p>
                    <p className='title-lecture-tarot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio quo dignissimos sapiente facere fuga aperiam, quis nostrum quas magnam labore sunt error veniam voluptas molestiae doloribus hic dolor officia?</p>
                    {/* <button className='reading-button new-lecture-btn btn-detalle'>Ver detalle</button> */}
                    <Link to="/carta-detalle" className='reading-button new-lecture-btn btn-detalle'>Ver detalle</Link>
                </div>
                <div className="box-card">
                    <h4>Presente</h4>
                    <img src="public\base-card-tarot.PNG" alt="card-img-lecture" />
                    <p className='subtitle-lecture-tarot'>La sacerdotiza</p>
                    <p className='title-lecture-tarot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio quo dignissimos sapiente facere fuga aperiam, quis nostrum quas magnam labore sunt error veniam voluptas molestiae doloribus hic dolor officia?</p>
                    {/* <button className='reading-button new-lecture-btn btn-detalle'>Ver detalle</button> */}
                    <Link to="/carta-detalle" className='reading-button new-lecture-btn btn-detalle'>Ver detalle</Link>
                </div>
                <div className="box-card">
                    <h4>Futuro</h4>
                    <img src="public\base-card-tarot.PNG" alt="card-img-lecture" />
                    <p className='subtitle-lecture-tarot'>La sacerdotiza</p>
                    <p className='title-lecture-tarot'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium distinctio quo dignissimos sapiente facere fuga aperiam, quis nostrum quas magnam labore sunt error veniam voluptas molestiae doloribus hic dolor officia?</p>
                    {/* <button className='reading-button new-lecture-btn btn-detalle'>Ver detalle</button> */}
                    <Link to="/carta-detalle" className='reading-button new-lecture-btn btn-detalle'>Ver detalle</Link>
                </div>
            </article>
        </>
    )
}

export default CardsLectureCompleted