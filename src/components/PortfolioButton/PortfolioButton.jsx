import '../BackButton/Button.css';
import { Link } from 'react-router-dom';

function PortfolioButton () {
    return (
        <div className='backBtn'>
                    <Link className='backBtn__link' to='/Portfolio'>Retour</Link>
                    <Link className='smallBackBtn__link' to='/Portfolio'>X</Link>
            </div>
    )
}

export default PortfolioButton
