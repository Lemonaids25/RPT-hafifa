import React, { useMemo, useCallback } from 'react';
import DegreeDisplay from '../../components/DegreeDisplay/DegreeDisplay';
import { usePartDegree, useReferencePart } from '../../contexts/PartsDegreeContext';
import { ROTATION_PARTS } from '../../utils/parts';
import { PART_IDS } from '../../utils/constants';
import './DegreeDisplaysContainer.css';

export default function DegreeDisplaysContainer() {
  const { referencePart, setReferencePart } = useReferencePart();
  const hull = usePartDegree(PART_IDS.HULL);
  const turret = usePartDegree(PART_IDS.TURRET);
  const sight = usePartDegree(PART_IDS.COMMANDER_SIGHT);

  const degrees = useMemo(() => ({ 
    [PART_IDS.HULL]: hull.degree, 
    [PART_IDS.TURRET]: turret.degree, 
    [PART_IDS.COMMANDER_SIGHT]: sight.degree 
  }), [hull.degree, turret.degree, sight.degree]);

  const handleToggleReference = useCallback((part) => {
    setReferencePart((prev) => (prev === part ? null : part));
  }, [setReferencePart]);

  return (
    <div className="degree-displays-container degree-display-container">
      {ROTATION_PARTS.map((part) => (
        <button 
          key={part.id}
          className={`degree-display-button ${referencePart === part.id ? 'active' : ''}`} 
          onClick={() => handleToggleReference(part.id)}
        >
          <DegreeDisplay 
            label={part.displayLabel} 
            className={part.className} 
            value={degrees[part.id]} 
          />
        </button>
      ))}
    </div>
  );
}
