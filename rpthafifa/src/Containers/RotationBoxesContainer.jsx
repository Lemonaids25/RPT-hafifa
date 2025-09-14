import React from 'react';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import { usePartPreview } from '../Managers/PreviewDegreeContext';
import NumberSetReset from '../components/inputs/NumberSetReset';
const PARTS = [
  { id: 'Hull', label: 'Hull Rotation' },
  { id: 'Turret', label: 'Turret Rotation' },
  { id: 'Commander Sight', label: 'Sight Rotation' },
];

function RotationRow({ partId, label }) {
  const { onSet } = usePartDegree(partId);
  const { setPreview, clearPreview } = usePartPreview(partId);
  return (
    <NumberSetReset placeholder={label} onSet={onSet} onPreview={setPreview} onPreviewClear={clearPreview} />
  );
}

export default function RotationBoxesContainer() {

  return (
    <div id="rotation-boxes-container">
      {PARTS.map((p) => (
        <RotationRow key={p.id} partId={p.id} label={p.label} />
      ))}
    </div>
  );
}
