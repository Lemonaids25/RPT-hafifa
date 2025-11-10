import React from 'react';
import { useTargeting, TARGETING_MODE } from '../../../contexts';
import { LEVER_LABELS, setLeverPosition } from './const';
import './TargetingLever.css';

const TargetingLever = () => {
  const { targetingMode, setTargetingMode, isManualMode, isAutomaticMode } = useTargeting();

  const handleLabelClick = (mode) => {
    setLeverPosition(setTargetingMode, mode);
  };

  return (
    <div className="targeting-lever-container">
      <div className="targeting-lever-labels">
        <div 
          className={`targeting-label ${isManualMode ? 'active manual' : ''}`}
          onClick={() => handleLabelClick(TARGETING_MODE.MANUAL)}
        >
          {LEVER_LABELS[TARGETING_MODE.MANUAL]}
        </div>
        <div 
          className={`targeting-label ${isAutomaticMode ? 'active automatic' : ''}`}
          onClick={() => handleLabelClick(TARGETING_MODE.AUTOMATIC)}
        >
          {LEVER_LABELS[TARGETING_MODE.AUTOMATIC]}
        </div>
      </div>
      
      <div className="targeting-lever-track">
        <div className={`targeting-lever-handle ${isManualMode ? 'top' : 'bottom'}`}>
          <div className="lever-grip"></div>
        </div>
      </div>
    </div>
  );
};

export default TargetingLever;
