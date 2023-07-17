import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import DataContext from '../../datacontext';
import BackButton from '../../components/BackButton/BackButton';

function Cards() {

  const data = useContext(DataContext);
  const [sortingCriteria, setSortingCriteria] = useState(''); // '' signifie pas de tri
  const [sortedCards, setSortedCards] = useState(data);

  // Gérer le tri lorsqu'un bouton est cliqué
  const handleSort = (criterion) => {
    setSortingCriteria(criterion);
    if (criterion === 'dev web') {
      const filteredCards = data.filter((item) => item.title === 'dev web');
      setSortedCards(filteredCards);
    } else if (criterion === 'web design') {
      const filteredCards = data.filter((item) => item.title === 'web design');
      setSortedCards(filteredCards);
    } else {
      // Si aucun critère de tri n'est spécifié, afficher toutes les cartes
      setSortedCards(data);
    }
  };

  return (
    <div>
      <div className='buttonsContainer'>
        <button className='btnSort' onClick={() => handleSort('dev web')}>
          Dev Web
        </button>
        <button className='btnSort' onClick={() => handleSort('web design')}>
          Design
        </button>
        <button className='btnSort' onClick={() => handleSort('')}>
          Tous
        </button>
      </div>
      <div className='container'>
        {sortedCards.map((item) => (
          <Link to={`./ProjectDetails/${item.id}`} key={item.id}>
            <figure className='card'>
              <img className='imgCard' src={item.cover} alt={item.title} />
            </figure>
          </Link>
        ))}
      </div>
      <BackButton />
    </div>
  );
}

export default Cards;
