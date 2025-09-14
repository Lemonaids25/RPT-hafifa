import React, { useEffect, useState } from 'react';
import { nextAngleShortest } from '../../features/orientation/angles';

export default function PreviewTankComponent({ src, degree = 0, alt = 'Tank Preview', className = '' }) {
  const [renderAngle, setRenderAngle] = useState(0);

  useEffect(() => {
    setRenderAngle((prev) => nextAngleShortest(prev, degree));
  }, [degree]);

  return (
    <img
      src={src}
      alt={alt}
      className={className ? `${className} tank-preview` : 'tank-preview'}
      style={{ transform: `rotate(${renderAngle}deg)` }}
      draggable={false}
    />
  );
}
