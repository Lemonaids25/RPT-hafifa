import React from 'react';
import TankComponent from '../components/TankComponents/TankComponent';
import PreviewDegreeContainer from './PreviewDegreeContainer';
import { useRelativeDegrees } from '../hooks/useRelativeDegrees';
import { TANK_COMPONENTS } from '../config/parts';
import { PART_IDS } from '../config/constants';
import compassPng from '../assets/360-degrees.png';
import '../components/TankComponents/TankComponent.css';

export default function TankContainer() {
  const { compassDegree, getDegree } = useRelativeDegrees();

  return (
    <div className="tank-container">
      <div className="tank-stack">
        <TankComponent
          key="Compass"
          src={compassPng}
          degree={compassDegree}
          alt="Compass"       
          className="compass-style"
        />

        <TankComponent
          key={PART_IDS.HULL}
          src={TANK_COMPONENTS[0].src}
          degree={getDegree(PART_IDS.HULL)}
          alt={TANK_COMPONENTS[0].alt}
          className={TANK_COMPONENTS[0].className}
        />
        
        <PreviewDegreeContainer />
        
        {TANK_COMPONENTS.slice(1).map((component) => (
          <TankComponent
            key={component.id}
            src={component.src}
            degree={getDegree(component.id)}
            alt={component.alt}
            className={component.className}
          />
        ))}
      </div>
    </div>
  );
}
