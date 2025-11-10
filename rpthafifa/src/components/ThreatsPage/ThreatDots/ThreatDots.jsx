import React from 'react';
import { useThreats, useTargeting } from '../../../contexts';
import { usePartDegree } from '../../../contexts/PartsDegreeContext';
import { PART_IDS } from '../../../utils/constants';
import { getThreatPosition } from './const';
import './ThreatDots.css';

const ThreatDots = () => {
  const { threats } = useThreats();
  const { selectedThreatId, selectThreat, isAutomaticMode } = useTargeting();
  const sight = usePartDegree(PART_IDS.COMMANDER_SIGHT);
  const hull = usePartDegree(PART_IDS.HULL);

  const handleThreatClick = (threat) => {
    selectThreat(threat.id);
    
    // In automatic mode, immediately update commander sight
    if (isAutomaticMode) {
      const absoluteDegree = hull.degree + threat.degrees;
      sight.onSet(absoluteDegree);
    }
  };

  return (
    <>
      {threats.map(threat => {
        const position = getThreatPosition(threat.degrees, threat.distance);
        const isSelected = selectedThreatId === threat.id;
        
        return (
          <div
            key={threat.id}
            className={`dd-threat-dot ${isSelected ? 'selected' : ''}`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`
            }}
            onClick={() => handleThreatClick(threat)}
          >
            {isSelected && (
              <div className="dd-threat-tooltip">
                <div className="dd-threat-tooltip-content">
                  <span className="dd-threat-tooltip-id">ID: {threat.id}</span>
                  <span className="dd-threat-tooltip-info">
                    {threat.degrees}° / {threat.distance}m
                  </span>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default ThreatDots;
