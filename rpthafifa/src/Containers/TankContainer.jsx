import React, { useMemo } from 'react';
import TankComponent from '../components/TankComponents/TankComponent';
import { usePartDegree, useReferencePart } from '../Managers/PartsDegreeContext';
import '../components/TankComponents/TankComponent.css';
import tankHullPng from '../assets/tank-hull.png';
import tankTurretPng from '../assets/tank-turret.png';
import commanderSight from '../assets/commander-sight.png';
import compassPng from '../assets/360-degrees.png';
import { toRelativeDegrees, compassDegreeRelative } from '../utils/angles';
import PreviewDegreeContainer from './PreviewDegreeContainer';

export default function TankContainer() {
  const hull = usePartDegree('Hull');
  const turret = usePartDegree('Turret');
  const sight = usePartDegree('Commander Sight');
  const { referencePart } = useReferencePart();

  const abs = useMemo(() => ({ Hull: hull.degree, Turret: turret.degree, 'Commander Sight': sight.degree }), [hull.degree, turret.degree, sight.degree]);
  const rel = useMemo(() => toRelativeDegrees(abs, referencePart, false), [abs, referencePart]);
  const compassDegree = useMemo(() => compassDegreeRelative(abs, referencePart, 90), [abs, referencePart]);

  return (
    <div id="tank-container">
      <div className="tank-stack">
        {/* Compass (static overlay) */}
        <TankComponent
          key={'Compass'}
          src={compassPng}
          degree={compassDegree}
          alt={'Compass'}       
          className={'compass-style'}
        />

        <TankComponent
          key={'Hull'}
          src={tankHullPng}
          degree={referencePart ? rel['Hull'] : hull.degree}
          alt={'Hull Rotation'}
          className={'tank-hull-style'}
        />
  <PreviewDegreeContainer />
        <TankComponent
          key={'Turret'}
          src={tankTurretPng}
          degree={referencePart ? rel['Turret'] : turret.degree}
          alt={'Turret Rotation'}
          className={'tank-turret-style'}
        />
        <TankComponent
          key={'Commander Sight'}
          src={commanderSight}
          degree={referencePart ? rel['Commander Sight'] : sight.degree}
          alt={'Commander Sight Rotation'}
          className={'commander-sight-style'}
        />
      </div>
    </div>
  );
}
