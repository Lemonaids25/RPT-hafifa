import React, { createContext, useState } from 'react';

export const WindCoatContext = createContext();

export const WindCoatProvider = ({ children }) => {
  const [leverPosition, setLeverPosition] = useState('off');
  const [threats, setThreats] = useState([]);

  const addThreat = (threat) => {
    const priority = (threats.length + 1) * 10;
    setThreats([...threats, { ...threat, priority }]);
  };

  return (
    <WindCoatContext.Provider value={{ leverPosition, setLeverPosition, threats, addThreat }}>
      {children}
    </WindCoatContext.Provider>
  );
};
