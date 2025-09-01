import React from 'react';
import './componentsCss/TankComponent.css';

export default function TankComponent({ src, degree, alt = "Tank Component", className = "" }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`tank-component-img ${className}`}
      style={{
        transform: `translateX(-50%) rotate(${degree}deg)`,
      }}
      draggable={false}
    />
  );
}