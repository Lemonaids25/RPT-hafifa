import React from 'react';
import { usePartDegree } from '../../context/PartsDegreeContext';
import { usePreview } from '../../context/PreviewDegreeContext';
import NumberSetReset from '../../components/inputs/NumberSetReset';
import { ROTATIONAL_PART_IDS, PARTS_CONFIG } from '../../config/parts'; // Import from new config

function RotationRow({ partId }) {
  const { onSet: onSetDegree } = usePartDegree(partId);
  const { set: setPreview, remove: clearPreview } = usePreview(partId);
  const { label } = PARTS_CONFIG[partId];
  return (
    <NumberSetReset placeholder={`${label} Rotation`} onSetDegree={onSetDegree} onPreview={setPreview} onPreviewClear={clearPreview} />
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
