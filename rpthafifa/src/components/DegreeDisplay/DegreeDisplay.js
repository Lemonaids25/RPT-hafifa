import React from 'react';
import './DegreeDisplay.css';

export default function DegreeDisplay({ label, value, className = '', style = {} }) {
  const normalizedValue = Math.round(((value % 360) + 360) % 360); //if its reused - put in utills
  return (
    <div className={`degree-display-box ${className}`} style={style}>
      {label}<br />
      <span style={{ fontSize: '1.3rem' }}>{normalizedValue}°</span>
    </div>
  ); //style will always be part of css unless it derives from a changing value
}