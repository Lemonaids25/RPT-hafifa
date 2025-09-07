import React, { useEffect, useState } from 'react';
import './TankComponent.css';

export default function TankComponent({ src, degree = 0, alt = "Tank Component", className = "" }) {
  // Keep a cumulative render angle so transitions take the shortest path
  const [renderAngle, setRenderAngle] = useState(0);

  useEffect(() => {
    // Normalize a value to [0, 360)
    const norm360 = (v) => ((v % 360) + 360) % 360;

    const target = norm360(Number.isFinite(degree) ? degree : 0);
    const currentNorm = norm360(renderAngle);
    let delta = target - currentNorm;
    if (delta > 180) delta -= 360; // choose shortest arc
    if (delta < -180) delta += 360;
    setRenderAngle((prev) => prev + delta);
  }, [degree]);

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={{ transform: `rotate(${renderAngle}deg)` }}
      draggable={false}
    />
  );
}