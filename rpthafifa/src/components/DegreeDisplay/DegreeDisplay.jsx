import React from 'react';
import '../../Containers/DegreeDisplay/DegreeDisplay.css';
import { normalize360Rounded } from '../../utils/angles';

export default function DegreeDisplay({ label, value, className = ''}) {
  const normalizedValue = normalize360Rounded(value);
  return (
    <div className={`degree-display-box ${className}`}>
      {label}<br />
      <span>{normalizedValue}°</span>
    </div>
  );
}
