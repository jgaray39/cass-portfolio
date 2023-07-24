import React, { useState } from 'react';
import openCollaps from '../../assets/openCollaps.png'
const Collaps = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollaps = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className='buttonCollaps' onClick={toggleCollaps}>
        {title}
        <img
          src={openCollaps}
          alt="parchemin"
          className={`openCollaps ${isOpen ? 'open' : 'closed'}`}
        />      </button>
      {isOpen && children}
    </div>
  );
};

export default Collaps;