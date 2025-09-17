import React, { useMemo } from 'react';
import TankComponent from '../../components/TankComponents/TankComponent';
import { useAllDegrees, useReferencePart } from '../../context/PartsDegreeContext';
import { toRelativeDegrees, compassDegreeRelative } from '../../utils/angles';
import PreviewDegreeContainer from './TankPreview/PreviewDegreeContainer';
import { ROTATIONAL_PART_IDS, PARTS_CONFIG, COMPASS_CONFIG } from '../../config/parts';

export default function TankContainer() {
  const degrees = useAllDegrees();
  const { referencePart } = useReferencePart();

  const relativeDegrees = useMemo(() => toRelativeDegrees(degrees, referencePart, false), [degrees, referencePart]);
  const compassDegree = useMemo(() => compassDegreeRelative(degrees, referencePart, 90), [degrees, referencePart]);

  const displayDegrees = referencePart ? relativeDegrees : degrees;

  return (
      <div id="tank-container" className="tank-stack">
        <TankComponent
          key={COMPASS_CONFIG.id}
          src={COMPASS_CONFIG.asset}
          degree={compassDegree}
          alt={COMPASS_CONFIG.alt}
          className={COMPASS_CONFIG.className}
        />
        <PreviewDegreeContainer />
        {ROTATIONAL_PART_IDS.map((partId) => {
          const { asset, className, alt } = PARTS_CONFIG[partId];
          return (
            <TankComponent
              key={partId}
              src={asset}
              degree={displayDegrees[partId]}
              alt={alt || `${partId} Rotation`}
              className={className}
            />
          );
        })}
      </div>
  );
}
