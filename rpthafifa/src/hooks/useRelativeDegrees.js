import { useMemo } from 'react';
import { usePartDegree, useReferencePart } from '../contexts/PartsDegreeContext';
import { toRelativeDegrees, compassDegreeRelative } from '../utils/angles';
import { PART_IDS, ANGLE_CONSTANTS } from '../utils/constants';

export function useRelativeDegrees() {
  const hull = usePartDegree(PART_IDS.HULL);
  const turret = usePartDegree(PART_IDS.TURRET);
  const sight = usePartDegree(PART_IDS.COMMANDER_SIGHT);
  const { referencePart } = useReferencePart();

  const absolute = useMemo(() => ({ 
    [PART_IDS.HULL]: hull.degree, 
    [PART_IDS.TURRET]: turret.degree, 
    [PART_IDS.COMMANDER_SIGHT]: sight.degree 
  }), [hull.degree, turret.degree, sight.degree]);
  
  const relative = useMemo(
    () => toRelativeDegrees(absolute, referencePart, false), 
    [absolute, referencePart]
  );

  const compassDegree = useMemo(
    () => compassDegreeRelative(absolute, referencePart, ANGLE_CONSTANTS.COMPASS_NORTH_OFFSET), 
    [absolute, referencePart]
  );

  const getDegree = (partId) => {
    return referencePart ? relative[partId] : absolute[partId];
  };

  return {
    absolute,
    relative,
    compassDegree,
    referencePart,
    getDegree
  };
}
