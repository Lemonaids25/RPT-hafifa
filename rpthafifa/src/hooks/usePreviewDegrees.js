import { useMemo } from 'react';
import { useReferencePart, usePartDegree } from '../contexts/PartsDegreeContext';
import { usePartPreview } from '../contexts/PreviewDegreeContext';
import { normalize180 } from '../utils/angles';
import { TANK_COMPONENTS } from '../utils/parts';

export function usePreviewDegrees() {
  const { referencePart } = useReferencePart();

  const hullDegree = usePartDegree(TANK_COMPONENTS[0].id).degree ?? 0;
  const hullPreview = usePartPreview(TANK_COMPONENTS[0].id).preview;
  
  const turretDegree = usePartDegree(TANK_COMPONENTS[1].id).degree ?? 0;
  const turretPreview = usePartPreview(TANK_COMPONENTS[1].id).preview;
  
  const sightDegree = usePartDegree(TANK_COMPONENTS[2].id).degree ?? 0;
  const sightPreview = usePartPreview(TANK_COMPONENTS[2].id).preview;

  const partsData = useMemo(() => ({
    [TANK_COMPONENTS[0].id]: { degree: hullDegree, preview: hullPreview },
    [TANK_COMPONENTS[1].id]: { degree: turretDegree, preview: turretPreview },
    [TANK_COMPONENTS[2].id]: { degree: sightDegree, preview: sightPreview }
  }), [hullDegree, hullPreview, turretDegree, turretPreview, sightDegree, sightPreview]);

  const referenceAngle = useMemo(() => {
    if (!referencePart) return 0;
    return partsData[referencePart]?.degree ?? 0;
  }, [referencePart, partsData]);

  const previewDegrees = useMemo(() => {
    const degrees = {};
    
    TANK_COMPONENTS.forEach(component => {
      const preview = partsData[component.id]?.preview;
      
      if (preview == null) {
        degrees[component.id] = null;
      } else {
        degrees[component.id] = referencePart 
          ? normalize180(preview - referenceAngle) 
          : preview;
      }
    });
    
    return degrees;
  }, [partsData, referencePart, referenceAngle]);

  return previewDegrees;
}
