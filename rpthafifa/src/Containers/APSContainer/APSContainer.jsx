import React from 'react';
import APSLever from '../../components/APSLever/APSLever';
import ThreatInputButton from '../../components/ThreatInputButton/ThreatInputButton';
import { getButtonText } from './const';
import './APSContainer.css';

const APSContainer = ({ pageType, onButtonClick, showButtonAlways = false }) => {
  const buttonText = getButtonText(pageType);

  return (
    <div className="aps-container">
      <APSLever />
      <div className="aps-button-placeholder">
        {showButtonAlways ? (
          <button className="aps-always-button" onClick={onButtonClick}>
            {buttonText}
          </button>
        ) : (
          <ThreatInputButton buttonText={buttonText} onNavigate={onButtonClick} />
        )}
      </div>
    </div>
  );
};

export default APSContainer;
