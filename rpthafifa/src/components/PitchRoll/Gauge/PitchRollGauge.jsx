import React, { useEffect, useState } from 'react';
import './PitchRollGauge.css';
import { nextAngleShortest } from '../../../utils/angles';

export default function PitchRollGauge({ src, degree = 0, alt = "Gauge", className = "" }) {
  const [renderAngle, setRenderAngle] = useState(0);

  useEffect(() => {
    setRenderAngle((prev) => nextAngleShortest(prev, degree));
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

