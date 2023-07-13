import './Navbar.css';
import ModalAboutMe from '../Modal/ModalAboutMe';
import ModalSkills from '../Modal/ModalSkills';
import React, { useState } from 'react';

function Navbar() {
  const [showAboutMeModal, setShowAboutMeModal] = useState(false);
  const [showSkillsModal, setShowSkillsModal] = useState(true);

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
      <h1 className='navbar__title'>Cassandra LAFFARGUE</h1>
      <ul className="navbar__link">
        <li onClick={handleClickAboutMe}>A propos de moi</li>
        <li>Mes services</li>
        <li onClick={handleClickSkills}>Mes compétences</li>
        <li>Portfolio</li>
      </ul>
      <ul className="navbar__link navbar__btn">
        <li className='navbar__btn--github'>GitHub</li>
        <li className='navbar__btn--contact'>Contact</li>
      </ul>

      {showAboutMeModal && <ModalAboutMe onClose={() => setShowAboutMeModal(false)} />}
      {showSkillsModal && <ModalSkills onClose={() => setShowSkillsModal(false)} />}
    </div>
  );
}

export default Navbar;
