import React from 'react';
import { useAPS } from '../../contexts';

const ThreatInputButton = ({ onNavigate, buttonText }) => {
  const { isScanning } = useAPS();

  if (!isScanning) {
    return null;
  }

  return (
    <button className="threat-input-button" onClick={onNavigate}>
      {buttonText}
    </button>
  );
};

export default ThreatInputButton;
