import React, { useMemo } from 'react';
import TankComponent from '../components/TankComponents/TankComponent';
import tankHullPng from '../assets/tank-hull.png';
import tankTurretPng from '../assets/tank-turret.png';
import commanderSight from '../assets/commander-sight.png';
import { useReferencePart, usePartDegree } from '../Managers/PartsDegreeContext';
import { usePartPreview } from '../Managers/PreviewDegreeContext';
import { normalize180 } from '../utils/angles';
import '../components/Preview/PreviewTank.css';

export default function PreviewDegreeContainer() {
  const { referencePart } = useReferencePart();
  // Absolute degrees of current parts (used to anchor previews to the compass/reference)
  const hullAbs = usePartDegree('Hull');
  const turretAbs = usePartDegree('Turret');
  const sightAbs = usePartDegree('Commander Sight');
  const prevHull = usePartPreview('Hull');
  const prevTurret = usePartPreview('Turret');
  const prevSight = usePartPreview('Commander Sight');

  const absPreview = useMemo(
    () => ({ Hull: prevHull.preview ?? null, Turret: prevTurret.preview ?? null, 'Commander Sight': prevSight.preview ?? null }),
    [prevHull.preview, prevTurret.preview, prevSight.preview]
  );

  // Determine the absolute angle of the active reference (compass anchor)
  const refAbs = useMemo(() => {
    if (!referencePart) return 0;
    if (referencePart === 'Hull') return hullAbs.degree ?? 0;
    if (referencePart === 'Turret') return turretAbs.degree ?? 0;
    if (referencePart === 'Commander Sight') return sightAbs.degree ?? 0;
    return 0;
  }, [referencePart, hullAbs.degree, turretAbs.degree, sightAbs.degree]);

  // Convert each preview to be relative to the compass (i.e., subtract refAbs when reference is active)
  const hullDeg = absPreview['Hull'] == null ? null : (referencePart ? normalize180(absPreview['Hull'] - refAbs) : absPreview['Hull']);
  const turretDeg = absPreview['Turret'] == null ? null : (referencePart ? normalize180(absPreview['Turret'] - refAbs) : absPreview['Turret']);
  const sightDeg = absPreview['Commander Sight'] == null ? null : (referencePart ? normalize180(absPreview['Commander Sight'] - refAbs) : absPreview['Commander Sight']);

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
