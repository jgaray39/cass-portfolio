import './Services.css'
import {Link} from 'react-router-dom'

function Services () {

   

    return(
        <div className='services'>
            <h2 className='servicesTitle'>Mes services</h2>
            <div className='services__cards'>
            <div className='card'>
                <h3 className='cardTitle'>Developpement Web</h3>
                    <ul className='CardDescription'>
                        <li>Developpement de sites vitrine</li>
                        <li>Application web front-end</li>
                        <li>Application back-end avec express JS</li>
                    </ul>
            </div>
            <div className='card'>
                <h3 className='cardTitle'>Design Web</h3>
                    <ul className='CardDescription'>
                        <li>Creation de logo</li>
                        <li>Création de maquette web avec Figma</li>
                        <li>Conception de visuel pour reseau sociaux</li>
                    </ul>
            </div>
            </div>
            <div className='back'>
                <p>
                    <Link to='/'>Accueil</Link>
                </p>
            </div>
        </div>
    )
}
export default Services