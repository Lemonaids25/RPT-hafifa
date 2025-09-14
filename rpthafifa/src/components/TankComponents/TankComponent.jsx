import React, { useEffect, useState } from 'react';
import './TankComponent.css';
import { nextAngleShortest } from '../../utils/angles';

export default function TankComponent({ src, degree = 0, alt = "Tank Component", className = "" }) {
  const [renderAngle, setRenderAngle] = useState(0);

  useEffect(() => {
      setRenderAngle((prev) => nextAngleShortest(prev, degree));
    }, [degree]);

  return (
    <img
      src={src}
      alt={alt}
      className={`tank-component ${className}`}
      style={{ transform: `translate(-50%, -50%) rotate(${renderAngle}deg)` }}
      draggable={false}
    />
  );
}