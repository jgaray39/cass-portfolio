import React from 'react';
import myPicture from '../../assets/my_picture.JPG'
import './AboutMe.css';

function AboutMe() {
  return (
    <div>
      <figure className='modal'>
        <h2 className="modalTitle">A PROPOS DE MOI</h2>
        <img src={myPicture} alt="cassandra laffargue" className="modalPicture" />
        <p className="modalDescription modalDescription_1">
          Passionnée par les métiers de la tech et du numérique, j’ai entrepris une reconversion professionnelle vers le développement web. Je suis particulièrement intéressée par le développement front-end et l'expérience utilisateur.
        </p>
        <p className="modalDescription modalDescription_2">
          J’ai également entrepris des projets centrés sur le design et la communication.
        </p>
      </figure>
    </div>
  );
}

export default AboutMe;