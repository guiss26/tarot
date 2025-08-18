//importaciones
import { Link } from 'react-router-dom'
import './ReadingButton.css'

const ReadingButton = () => {
    return (
        <>
            <Link to="/lectura" className='reading-button'>Hacer una lectura</Link>
        </>
    )
}

export default ReadingButton