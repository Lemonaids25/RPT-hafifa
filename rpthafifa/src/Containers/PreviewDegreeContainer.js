import React, { useMemo } from 'react';
import TankComponent from '../components/TankComponents/TankComponent';
import tankHullPng from '../assets/tank-hull.png';
import tankTurretPng from '../assets/tank-turret.png';
import commanderSight from '../assets/commander-sight.png';
import { useReferencePart, usePartDegree } from '../Managers/PartsDegreeContext';
import { usePartPreview } from '../Managers/PreviewDegreeContext';
import { toRelativeDegrees } from '../utils/angles';
import '../components/Preview/PreviewTank.css';

export default function PreviewDegreeContainer() {
  const { referencePart } = useReferencePart();
  const prevHull = usePartPreview('Hull');
  const prevTurret = usePartPreview('Turret');
  const prevSight = usePartPreview('Commander Sight');

  const absPreview = useMemo(() => ({ Hull: prevHull.preview ?? null, Turret: prevTurret.preview ?? null, 'Commander Sight': prevSight.preview ?? null }), [prevHull.preview, prevTurret.preview, prevSight.preview]);
  const relPreview = useMemo(() => (referencePart ? toRelativeDegrees(absPreview, referencePart, false) : absPreview), [absPreview, referencePart]);

  const hullDeg = relPreview['Hull'];
  const turretDeg = relPreview['Turret'];
  const sightDeg = relPreview['Commander Sight'];

  return (
    <>
      {hullDeg !== null && hullDeg !== undefined && (
        <TankComponent src={tankHullPng} degree={hullDeg} alt={'Hull Preview'} className={'tank-hull-style tank-preview'} />
      )}
      {turretDeg !== null && turretDeg !== undefined && (
        <TankComponent src={tankTurretPng} degree={turretDeg} alt={'Turret Preview'} className={'tank-turret-style tank-preview'} />
      )}
      {sightDeg !== null && sightDeg !== undefined && (
        <TankComponent src={commanderSight} degree={sightDeg} alt={'Commander Sight Preview'} className={'commander-sight-style tank-preview'} />
      )}
    </>
  );
}
