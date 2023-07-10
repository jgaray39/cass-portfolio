import './Navbar.css'

function Navbar() {
    return (
      <div className='navbar'>        
        <h1 className='navbar__title'>Cassandra LAFFARGUE</h1>
            <ul className="navbar__link">
                <li> A propos de moi</li>
                <li>Mes services</li>
                <li>Mes compétences</li>
                <li>Portfolio</li>
            </ul>
            <ul className="navbar__link navbar__btn">
                <li className='navbar__btn--github'>GitHub</li>
                <li className='navbar__btn--contact'>Contact</li>
            </ul>
      </div>)}

export default Navbar