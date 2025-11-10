import React, { createContext, useContext, useState, useCallback } from 'react';

export const TARGETING_MODE = {
  MANUAL: 'manual',
  AUTOMATIC: 'automatic'
};

const TargetingContext = createContext();

export const useTargeting = () => {
  const context = useContext(TargetingContext);
  if (!context) {
    throw new Error('useTargeting must be used within TargetingProvider');
  }
  return context;
};

export const TargetingProvider = ({ children }) => {
  const [targetingMode, setTargetingMode] = useState(TARGETING_MODE.MANUAL);
  const [selectedThreatId, setSelectedThreatId] = useState(null);

  const isManualMode = targetingMode === TARGETING_MODE.MANUAL;
  const isAutomaticMode = targetingMode === TARGETING_MODE.AUTOMATIC;

  const selectThreat = useCallback((threatId) => {
    setSelectedThreatId(selectedThreatId === threatId ? null : threatId);
  }, [selectedThreatId]);

  const clearSelection = useCallback(() => {
    setSelectedThreatId(null);
  }, []);

  const value = {
    targetingMode,
    setTargetingMode,
    selectedThreatId,
    selectThreat,
    clearSelection,
    isManualMode,
    isAutomaticMode
  };

  return (
    <TargetingContext.Provider value={value}>
      {children}
    </TargetingContext.Provider>
  );
};
