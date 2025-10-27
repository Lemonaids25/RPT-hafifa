import React from 'react';
import TankComponent from '../components/TankComponents/TankComponent';
import { usePreviewDegrees } from '../hooks/usePreviewDegrees';
import { TANK_COMPONENTS } from '../utils/parts';
import '../components/Preview/PreviewTank.css';

export default function PreviewDegreeContainer() {
  const previewDegrees = usePreviewDegrees();

  return (
    <>
      {TANK_COMPONENTS.map(component => {
        const degree = previewDegrees[component.id];
        if (degree == null) return null;
        
        return (
          <TankComponent 
            key={`preview-${component.id}`}
            src={component.src} 
            degree={degree} 
            alt={`${component.alt} Preview`} 
            className={`${component.className} tank-preview`} 
          />
        );
      })}
    </>
  );
}
