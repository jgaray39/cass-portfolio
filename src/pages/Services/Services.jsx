import BackButton from '../../components/BackButton/BackButton'
import { Link } from 'react-router-dom'
import './Services.css'

function Services () {
    return(
        <div className='services'>
            <h2 className='servicesTitle'>Mes services</h2>
            <div className='services__cards'>
                <div className='cardServices'>
                <Link className='linkPortfolio' to="/portfolio">
                    <h3 className='cardTitle'>Developpement Web</h3>
                        <ul className='CardDescription'>
                            <li>Developpement de sites vitrine</li>
                            <li>Applications web responsives</li>
                            <li>Serveur Node JS avec Express </li>
                            <li>Referencement de site web</li>
                        </ul>
                </Link>
                </div>
            <div className='cardServices'>
                <h3 className='cardTitle'>Design Web</h3>
                    <ul className='CardDescription'>
                        <li>Creation de logo</li>
                        <li>Création de maquette web avec Figma</li>
                        <li>Conception de visuel pour reseau sociaux</li>
                        <li>Création de flyers et cartes de visite</li>
                    </ul>
            </div>
                <BackButton />
            </div>
        </div>
    )
}
export default Services