import React, { useMemo, useCallback } from 'react';
import DegreeDisplay from '../components/DegreeDisplay/DegreeDisplay';
import { usePartDegree, useReferencePart } from '../Managers/PartsDegreeContext';

export default function DegreeDisplaysContainer() {
  const hull = usePartDegree('Hull');
  const turret = usePartDegree('Turret');
  const sight = usePartDegree('Commander Sight');
  const { referencePart, setReferencePart } = useReferencePart();

  const degrees = useMemo(() => ({ Hull: hull.degree, Turret: turret.degree, 'Commander Sight': sight.degree }), [hull.degree, turret.degree, sight.degree]);

  const makeClick = useCallback((part) => () => {
    setReferencePart((prev) => (prev === part ? null : part));
  }, [setReferencePart]);

  const active = referencePart;
  return (
    <div id="degree-displays-container" className="degree-display-container">
      <button className={`degree-display-button ${active === 'Hull' ? 'active' : ''}`} onClick={makeClick('Hull')}>
  <DegreeDisplay label="Hull" className="hull" value={degrees['Hull']} />
      </button>
      <button className={`degree-display-button ${active === 'Turret' ? 'active' : ''}`} onClick={makeClick('Turret')}>
  <DegreeDisplay label="Turret" className="turret" value={degrees['Turret']} />
      </button>
      <button className={`degree-display-button ${active === 'Commander Sight' ? 'active' : ''}`} onClick={makeClick('Commander Sight')}>
  <DegreeDisplay label="Sight" className="sight" value={degrees['Commander Sight']} />
      </button>
    </div>
  );
}
