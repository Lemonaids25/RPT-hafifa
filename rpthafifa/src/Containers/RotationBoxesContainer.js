import React from 'react';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import NumberSetReset from '../components/inputs/NumberSetReset';
const PARTS = [
  { id: 'Hull', label: 'Hull Rotation' },
  { id: 'Turret', label: 'Turret Rotation' },
  { id: 'Commander Sight', label: 'Sight Rotation' },
];

function RotationRow({ partId, label }) {
  const { onSet, onReset } = usePartDegree(partId);
  return (
    <NumberSetReset placeholder={label} onSet={onSet} onReset={onReset} />
  );
}

export default function RotationBoxesContainer() {
  // No hooks here; hooks are used inside RotationRow per part

  return (
    <div id="rotation-boxes-container">
      {PARTS.map((p) => (
        <RotationRow key={p.id} partId={p.id} label={p.label} />
      ))}
    </div>
  );
}
