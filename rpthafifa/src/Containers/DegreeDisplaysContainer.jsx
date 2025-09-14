import React, { useCallback } from 'react';
import DegreeDisplay from '../components/DegreeDisplay/DegreeDisplay';
import { useReferencePart, useAllDegrees } from '../Managers/PartsDegreeContext';
import { ROTATIONAL_PART_IDS, PARTS_CONFIG } from '../config/parts'; // Import from new config

export default function DegreeDisplaysContainer() {
  const degrees = useAllDegrees();
  const { referencePart, setReferencePart } = useReferencePart();

  const makeClick = useCallback((part) => () => {
    setReferencePart((prev) => (prev === part ? null : part));
  }, [setReferencePart]);

  return (
    <div id="degree-displays-container" className="degree-display-container">
      {ROTATIONAL_PART_IDS.map((partId) => {
        const { label } = PARTS_CONFIG[partId];
        const isActive = referencePart === partId;
        return (
          <button key={partId} className={`degree-display-button ${isActive ? 'active' : ''}`} onClick={makeClick(partId)}>
            <DegreeDisplay label={label} value={degrees[partId]} />
          </button>
        );
      })}
    </div>
  );
}
