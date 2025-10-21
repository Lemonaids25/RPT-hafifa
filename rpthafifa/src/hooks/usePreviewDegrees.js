import { useMemo } from 'react';
import { useReferencePart, usePartDegree } from '../contexts/PartsDegreeContext';
import { usePartPreview } from '../contexts/PreviewDegreeContext';
import { normalize180 } from '../utils/angles';
import { TANK_COMPONENTS } from '../config/parts';

/**
 * Custom hook to calculate preview degrees for all tank components
 * based on the active reference part and preview values
 */
export function usePreviewDegrees() {
  const { referencePart } = useReferencePart();

  // Get all part degrees and previews (hooks must be called at top level)
  const hull = {
    degree: usePartDegree(TANK_COMPONENTS[0].id).degree ?? 0,
    preview: usePartPreview(TANK_COMPONENTS[0].id).preview
  };
  const turret = {
    degree: usePartDegree(TANK_COMPONENTS[1].id).degree ?? 0,
    preview: usePartPreview(TANK_COMPONENTS[1].id).preview
  };
  const sight = {
    degree: usePartDegree(TANK_COMPONENTS[2].id).degree ?? 0,
    preview: usePartPreview(TANK_COMPONENTS[2].id).preview
  };

  // Map parts to their data
  const partsData = useMemo(() => ({
    [TANK_COMPONENTS[0].id]: hull,
    [TANK_COMPONENTS[1].id]: turret,
    [TANK_COMPONENTS[2].id]: sight
  }), [hull, turret, sight]);

  // Get reference part's absolute angle
  const referenceAngle = useMemo(() => {
    if (!referencePart) return 0;
    return partsData[referencePart]?.degree ?? 0;
  }, [referencePart, partsData]);

  // Calculate preview degrees relative to reference
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
