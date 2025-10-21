import { useMemo } from 'react';
import { usePartDegree, useReferencePart } from '../contexts/PartsDegreeContext';
import { toRelativeDegrees } from '../utils/angles';

/**
 * Custom hook to get degrees for multiple tank parts with relative calculations
 * @param {Array<string>} partIds - Array of part identifiers
 * @returns {Object} Object containing absolute degrees, relative degrees, and reference part
 */
export function useTankPartsDegrees(partIds) {
  const { referencePart } = useReferencePart();
  
  // Get all part degrees
  const partStates = {};
  partIds.forEach(id => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    partStates[id] = usePartDegree(id);
  });

  // Build absolute degrees map
  const absoluteDegrees = useMemo(() => {
    const degrees = {};
    partIds.forEach(id => {
      degrees[id] = partStates[id]?.degree ?? 0;
    });
    return degrees;
  }, [partIds, partStates]);

  // Calculate relative degrees
  const relativeDegrees = useMemo(() => 
    toRelativeDegrees(absoluteDegrees, referencePart, false),
    [absoluteDegrees, referencePart]
  );

  return {
    absoluteDegrees,
    relativeDegrees,
    referencePart,
    partStates
  };
}
