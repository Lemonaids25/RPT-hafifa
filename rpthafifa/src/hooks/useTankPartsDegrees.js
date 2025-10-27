import { useMemo } from 'react';
import { usePartDegree, useReferencePart } from '../contexts/PartsDegreeContext';
import { toRelativeDegrees } from '../utils/angles';

export function useTankPartsDegrees(partIds) {
  const { referencePart } = useReferencePart();
  
  const partStates = {};
  partIds.forEach(id => {
    partStates[id] = usePartDegree(id);
  });

  const absoluteDegrees = useMemo(() => {
    const degrees = {};
    partIds.forEach(id => {
      degrees[id] = partStates[id]?.degree ?? 0;
    });
    return degrees;
  }, [partIds, partStates]);

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
