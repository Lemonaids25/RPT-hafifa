import React from 'react';
import TankManager from '../Managers/DegreeManager.js';
import { RotationBoxLayout } from './RotationBoxLayout';
import { DegreeDisplayLayout } from './DegreeDisplay/DegreeDisplay.js';
import { TankLayout } from './TankLayout';
import tankPartsLayout from '../components/TankComponents/const.js';

export function HullLayout() {
  const hull = tankPartsLayout.find(part => part.name === 'Hull');
  return (
    <TankManager key={hull.name}>
      {({ degree, handleSet, handleReset }) => (
        <>
          <RotationBox
            value={degree}
            onSet={handleSet}
            onReset={handleReset}
            placeholder={hull.placeholder}
          />
          <DegreeDisplay {...hullConfig} value={degree} />
          <TankComponent
            src={hull.src}
            degree={degree}
            alt={hull.name}
            className={hull.className}
          />
        </>
      )}
    </TankManager>
  );
}

export function TurretLayout() {
  const turret = tankPartsLayout.find(part => part.name === 'Turret');
  return (
    <TankManager key={turret.name}>
      {({ degree, handleSet, handleReset }) => (
        <>
          <RotationBox
            value={degree}
            onSet={handleSet}
            onReset={handleReset}
            placeholder={turret.placeholder}
          />
          <DegreeDisplay {...turretConfig} value={degree} />
          <TankComponent
            src={turret.src}
            degree={degree}
            alt={turret.name}
            className={turret.className}
          />
        </>
      )}
    </TankManager>
  );
}

export function SightLayout() {
  const sight = tankPartsLayout.find(part => part.name === 'Commander Sight');
  return ( // change structure and use callbacks
    <TankManager key={sight.name} id="sight-container">
      {({ degree, handleSet, handleReset }) => (
        <>
          <RotationBox
            value={degree}
            onSet={handleSet}
            onReset={handleReset}
            placeholder={sight.placeholder}
          />
          <DegreeDisplay {...sightConfig} value={degree} />
          <TankComponent
            src={sight.src}
            degree={degree}
            alt={sight.name}
            className={sight.className}
          />
        </>
      )}
    </TankManager>
  );
}

export function CompassLayout() {
  const compass = tankPartsLayout.find(part => part.name === 'Compass');
  return (
    <TankComponent
      key={compass.name}
      src={compass.src}
      degree={90}
      alt={compass.name}
      className={compass.className}
    />
  );
}