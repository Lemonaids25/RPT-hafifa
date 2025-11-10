import React from 'react';
import { useTargeting } from '../../../contexts';
import { usePartDegree } from '../../../contexts/PartsDegreeContext';
import { useThreats } from '../../../contexts';
import { PART_IDS } from '../../../utils/constants';
import { BUTTON_TEXT } from './const';
import './ToTargetButton.css';

const ToTargetButton = () => {
  const { isManualMode, selectedThreatId, clearSelection } = useTargeting();
  const { threats } = useThreats();
  const sight = usePartDegree(PART_IDS.COMMANDER_SIGHT);
  const hull = usePartDegree(PART_IDS.HULL);

  // Only show button in manual mode when a threat is selected
  if (!isManualMode || !selectedThreatId) {
    return null;
  }

  const selectedThreat = threats.find(t => t.id === selectedThreatId);
  if (!selectedThreat) {
    return null;
  }

  const handleToTarget = () => {
    // Calculate absolute degree: hull + threat relative degree
    const absoluteDegree = hull.degree + selectedThreat.degrees;
    sight.onSet(absoluteDegree);
    clearSelection();
  };

  return (
    <button 
      className="to-target-button"
      onClick={handleToTarget}
    >
      {BUTTON_TEXT.TO_TARGET}
    </button>
  );
};

export default ToTargetButton;
