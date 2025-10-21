import { useMemo } from 'react';
import { usePartDegree, useReferencePart } from '../contexts/PartsDegreeContext';
import { toRelativeDegrees, compassDegreeRelative } from '../utils/angles';
import { PART_IDS, ANGLE_CONSTANTS } from '../config/constants';

/**
 * Custom hook to calculate absolute, relative, and compass degrees
 * for all tank parts based on the active reference part
 */
export function useRelativeDegrees() {
  const hull = usePartDegree(PART_IDS.HULL);
  const turret = usePartDegree(PART_IDS.TURRET);
  const sight = usePartDegree(PART_IDS.COMMANDER_SIGHT);
  const { referencePart } = useReferencePart();

  // Absolute degrees for all parts
  const absolute = useMemo(() => ({ 
    [PART_IDS.HULL]: hull.degree, 
    [PART_IDS.TURRET]: turret.degree, 
    [PART_IDS.COMMANDER_SIGHT]: sight.degree 
  }), [hull.degree, turret.degree, sight.degree]);
  
  // Relative degrees when reference part is active
  const relative = useMemo(
    () => toRelativeDegrees(absolute, referencePart, false), 
    [absolute, referencePart]
  );

  // Compass rotation relative to reference part
  const compassDegree = useMemo(
    () => compassDegreeRelative(absolute, referencePart, ANGLE_CONSTANTS.COMPASS_NORTH_OFFSET), 
    [absolute, referencePart]
  );

  /**
   * Get degree for a specific part, accounting for reference
   * @param {string} partId - The part ID to get the degree for
   * @returns {number} The degree value (relative if reference is active, absolute otherwise)
   */
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
