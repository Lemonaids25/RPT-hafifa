import React, { useState, useContext } from 'react';
import { WindCoatContext } from '../../../context/WindCoatContext';
import Threats from '../../../components/WindCoat/Threats/Threats';

const ThreatsContainer = () => {
  const { addThreat, threats } = useContext(WindCoatContext);
  const [degree, setDegree] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addThreat({ degree, distance });
    setDegree('');
    setDistance('');
  };

  return (
    <Threats
      threats={threats}
      degree={degree}
      setDegree={setDegree}
      distance={distance}
      setDistance={setDistance}
      handleSubmit={handleSubmit}
    />
  );
};

export default ThreatsContainer;
