import React from 'react';
import './TankComponent.css';

export default function TankComponent({ src, degree, alt = "Tank Component", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ transform: `rotate(${degree}deg)` }}
      draggable={false}
    />
  );
}