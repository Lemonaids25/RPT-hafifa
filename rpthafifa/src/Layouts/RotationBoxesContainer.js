import React from 'react';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import RotationBox from '../components/RotationBox/RotationBox';

export default function RotationBoxesContainer() {
  const hull = usePartDegree('Hull');
  const turret = usePartDegree('Turret');
  const sight = usePartDegree('Commander Sight');

  return (
    <div id="rotation-boxes-container">
      <RotationBox placeholder="Hull Rotation" onSet={hull.onSet} onReset={hull.onReset} />
      <RotationBox placeholder="Turret Rotation" onSet={turret.onSet} onReset={turret.onReset} />
      <RotationBox placeholder="Sight Rotation" onSet={sight.onSet} onReset={sight.onReset} />
    </div>
  );
}
