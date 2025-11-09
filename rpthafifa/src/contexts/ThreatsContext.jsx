import React, { createContext, useContext, useState, useCallback } from 'react';

const ThreatsContext = createContext();

export const useThreats = () => {
  const context = useContext(ThreatsContext);
  if (!context) {
    throw new Error('useThreats must be used within ThreatsProvider');
  }
  return context;
};

export const ThreatsProvider = ({ children }) => {
  const [threats, setThreats] = useState([]);
  const [nextId, setNextId] = useState(10);

  const addThreat = useCallback((degrees, distance) => {
    // Validate distance (0-3000)
    if (distance < 0 || distance > 3000) {
      return false; // Invalid threat, don't add or increment ID
    }

    const newThreat = {
      id: nextId,
      degrees: Number(degrees),
      distance: Number(distance)
    };

    setThreats(prev => [...prev, newThreat]);
    setNextId(prev => prev + 10);
    return true;
  }, [nextId]);

  const removeThreat = useCallback((id) => {
    setThreats(prev => prev.filter(threat => threat.id !== id));
  }, []);

  const clearThreats = useCallback(() => {
    setThreats([]);
    setNextId(10);
  }, []);

  const value = {
    threats,
    addThreat,
    removeThreat,
    clearThreats
  };

  return (
    <ThreatsContext.Provider value={value}>
      {children}
    </ThreatsContext.Provider>
  );
};
