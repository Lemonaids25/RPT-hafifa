import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
      className={className}
      style={{ transform: `rotate(${renderAngle}deg)` }}
      draggable={false}
    />
  );
}

TankComponent.propTypes = {
  src: PropTypes.string.isRequired,
  degree: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string
};