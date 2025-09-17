import React, { useMemo } from 'react';
import TankComponent from '../../../components/TankComponents/TankComponent';
import { useAllDegrees, useReferencePart } from '../../../Managers/PartsDegreeContext';
import { useAllPreviews } from '../../../Managers/PreviewDegreeContext'; // Assuming a new useAllPreviews hook
import { normalize180 } from '../../../utils/angles';
import { ROTATIONAL_PART_IDS, PARTS_CONFIG } from '../../../config/parts';
import './PreviewTank.css';

export default function PreviewDegreeContainer() {
  const { referencePart } = useReferencePart();
  const allDegrees = useAllDegrees();
  const allPreviews = useAllPreviews(); // This would get all preview values

  const referenceAngle = referencePart ? allDegrees[referencePart] ?? 0 : 0;

  return (
    <>
      {ROTATIONAL_PART_IDS.map((partId) => {
        const previewAngle = allPreviews[partId];
        if (previewAngle === null || previewAngle === undefined) {
          return null;
        }

        const relativeAngle = normalize180(previewAngle - referenceAngle);
        const displayAngle = referencePart ? relativeAngle : previewAngle;
        
        const { asset, className, alt } = PARTS_CONFIG[partId];

        return (
          <TankComponent
            key={`${partId}-preview`}
            src={asset}
            degree={displayAngle}
            alt={`${alt} Preview`}
            className={`${className} tank-preview`}
          />
        );
      })}
    </>
  );
}