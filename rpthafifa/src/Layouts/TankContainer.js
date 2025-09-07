import React from 'react';
import TankComponent from '../components/TankComponents/TankComponent';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import '../components/TankComponents/TankComponent.css';
import tankHullPng from '../assets/tank-hull.png';
import tankTurretPng from '../assets/tank-turret.png';
import commanderSight from '../assets/commander-sight.png';
import compassPng from '../assets/360-degrees.png';

export default function TankContainer() {
  // Call hooks at the top level (fixed rules-of-hooks)
  const hull = usePartDegree('Hull');
  const turret = usePartDegree('Turret');
  const sight = usePartDegree('Commander Sight');

  return (
    <div id="tank-container">
      <div className="tank-stack">
        {/* Compass (static overlay) */}
        <TankComponent
          key={'Compass'}
          src={compassPng}
          degree={90}
          alt={'Compass'}
          className={'compass-style'}
        />

        <TankComponent
          key={'Hull'}
          src={tankHullPng}
          degree={hull.degree}
          alt={'Hull Rotation'}
          className={'tank-hull-style'}
        />
        <TankComponent
          key={'Turret'}
          src={tankTurretPng}
          degree={turret.degree}
          alt={'Turret Rotation'}
          className={'tank-turret-style'}
        />
        <TankComponent
          key={'Commander Sight'}
          src={commanderSight}
          degree={sight.degree}
          alt={'Commander Sight Rotation'}
          className={'commander-sight-style'}
        />
      </div>
    </div>
  );
}
