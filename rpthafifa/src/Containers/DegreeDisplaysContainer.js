import React from 'react';
import DegreeDisplay from '../components/DegreeDisplay/DegreeDisplay';
import { usePartDegree } from '../Managers/PartsDegreeContext';

export default function DegreeDisplaysContainer() {
  const hull = usePartDegree('Hull');
  const turret = usePartDegree('Turret');
  const sight = usePartDegree('Commander Sight');

  return (
    <div id="degree-displays-container" className="degree-display-container">
      <DegreeDisplay label="Hull" className="hull" value={hull.degree} />
      <DegreeDisplay label="Turret" className="turret" value={turret.degree} />
      <DegreeDisplay label="Commander Sight" className="sight" value={sight.degree} />
    </div>
  );
}
