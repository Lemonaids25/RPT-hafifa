import React from 'react';
import './componentsCss/DegreeDisplay.css';

export default function DegreeDisplay({ label, value, className = '', style = {} }) {
  return (
    <div className={`degree-display-box ${className}`} style={style}>
      {label}<br />
      <span style={{ fontSize: '1.3rem' }}>{value}°</span>
    </div>
  );
}