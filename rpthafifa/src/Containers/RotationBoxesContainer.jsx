import React from 'react';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import { usePartPreview } from '../Managers/PreviewDegreeContext';
import NumberSetReset from '../components/inputs/NumberSetReset';
import { ROTATIONAL_PART_IDS, PARTS_CONFIG } from '../config/parts'; // Import from new config

function RotationRow({ partId }) {
  const { onSet } = usePartDegree(partId);
  const { setPreview, clearPreview } = usePartPreview(partId);
  const { label } = PARTS_CONFIG[partId];
  return (
    <NumberSetReset placeholder={`${label} Rotation`} onSet={onSet} onPreview={setPreview} onPreviewClear={clearPreview} />
  );
}

export default function RotationBoxesContainer() {
  return (
    <div id="rotation-boxes-container">
      {ROTATIONAL_PART_IDS.map((partId) => (
        <RotationRow key={partId} partId={partId} />
      ))}
    </div>
  );
}
