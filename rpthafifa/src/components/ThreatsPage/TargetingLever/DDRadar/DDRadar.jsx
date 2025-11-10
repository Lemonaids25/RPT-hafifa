import React from 'react';
import { usePartDegree } from '../../../../contexts/PartsDegreeContext';
import { PART_IDS } from '../../../../utils/constants';
import ThreatDots from '../../ThreatDots/ThreatDots';
import { DD_RANGE_CIRCLES, calculateNorthRotation, calculateRelativeRotation } from './const';
import './DDRadar.css';

const DDRadar = () => {
  const hull = usePartDegree(PART_IDS.HULL);
  const turret = usePartDegree(PART_IDS.TURRET);
  const sight = usePartDegree(PART_IDS.COMMANDER_SIGHT);

  const northRotation = calculateNorthRotation(hull.degree);
  const sightRotation = calculateRelativeRotation(sight.degree, hull.degree);
  const turretRotation = calculateRelativeRotation(turret.degree, hull.degree);

  return (
    <div className="dd-radar-container">
      <div className="dd-radar">
        {/* Concentric circles for range indicators */}
        {DD_RANGE_CIRCLES.map(circle => (
          <div key={circle.distance} className={`dd-circle ${circle.className}`}>
            <span className="dd-range-label">{circle.label}</span>
          </div>
        ))}

        {/* Cross lines (North-South, East-West) */}
        <div className="dd-crosshair">
          <div className="dd-line dd-line-vertical"></div>
          <div className="dd-line dd-line-horizontal"></div>
        </div>

        {/* North indicator - rotates to stay at compass 0 */}
        <div 
          className="dd-north-indicator" 
          style={{ transform: `rotate(${northRotation}deg)` }}
        >
          <div className="dd-north-icon">N</div>
        </div>

        {/* Sight/Scope indicator - positioned relative to hull */}
        <div 
          className="dd-sight-indicator" 
          style={{ transform: `rotate(${sightRotation}deg)` }}
        >
          <div className="dd-sight-icon">⊕</div>
        </div>

        {/* Center tank icon with turret arrow */}
        <div className="dd-tank-center">
          <div 
            className="dd-turret-arrow" 
            style={{ transform: `rotate(${turretRotation}deg)` }}
          >
            <div className="dd-turret-line"></div>
            <div className="dd-turret-tip">▲</div>
          </div>
          <div className="dd-tank-icon">TANK</div>
        </div>

        {/* Threat dots */}
        <ThreatDots />
      </div>
    </div>
  );
};

export default DDRadar;
