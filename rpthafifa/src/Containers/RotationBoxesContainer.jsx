import React from 'react';
import RotationRow from '../components/RotationRow/RotationRow';
import { ROTATION_PARTS } from '../config/parts';

export default function RotationBoxesContainer() {
  return (
    <div className="rotation-boxes-container">
      {ROTATION_PARTS.map((part) => (
        <RotationRow key={part.id} partId={part.id} label={part.label} />
      ))}
    </div>
  );
}
