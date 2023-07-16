import './Navbar.css';
import ModalAboutMe from '../Modal/ModalAboutMe';
import ModalSkills from '../Modal/ModalSkills';
import React, { useState } from 'react';
import {Link} from 'react-router-dom'


function Navbar() {
  const [showAboutMeModal, setShowAboutMeModal] = useState(true);
  const [showSkillsModal, setShowSkillsModal] = useState(false);

  const handleClickAboutMe = () => {
    setShowAboutMeModal(true);
    setShowSkillsModal(false);
  };
  const handleClickSkills = () => {
    setShowSkillsModal(true);
    setShowAboutMeModal(false);
  };
  

  return (
    <div className='navbar'>
      <h1 className='navbar__title'>
          Cassandr
        <span className="special-letter">a</span>
      </h1>
      <ul className="navbar__link">
        <li className="openToggleMenu" onClick={handleClickAboutMe}>A propos de moi</li>
        <li className="toggleMenu" onClick={handleClickSkills}>Mes compétences</li>
        <li className="toggleMenu"> <Link className="white-link" to="./Services">Mes services</Link> </li>
        <li className="toggleMenu"> <Link className="white-link" to="./Portfolio">Portfolio</Link> </li>
      </ul>
      <ul className="navbar__link navbar__btn">
        <li className='navbar__btn--github'>
          <a href="https://github.com/Ash-Cassandra">GitHub</a>
        </li>
        <li className='navbar__btn--contact'>
          <a href="mailto:c.larcheveque@orange.fr">Contact</a>
        </li>      
      </ul>

      {showAboutMeModal && <ModalAboutMe onClose={() => setShowAboutMeModal(false)} />}
      {showSkillsModal && <ModalSkills onClose={() => setShowSkillsModal(false)} />}
    </div>
  );
}

export default Navbar;
