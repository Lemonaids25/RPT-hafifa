import React from 'react';
import './DegreeDisplay.css';
import { normalize360Rounded } from '../../utils/angles';

export default function DegreeDisplay({ label, value, className = '', style = {} }) {
  const normalizedValue = normalize360Rounded(value);
  return (
    <div className={`degree-display-box ${className}`} style={style}>
      {label}<br />
      <span>{normalizedValue}°</span>
    </div>
  ); //style will always be part of css unless it derives from a changing value
}
