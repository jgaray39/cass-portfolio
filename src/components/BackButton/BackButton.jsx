import './BackButton.css';
import { Link } from 'react-router-dom';

function BackButton () {
    return (
        <div className='backBtn'>
                    <Link className='backBtn__link' to='/'>Accueil</Link>
            </div>
    )
}

export default BackButton
