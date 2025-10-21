import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './PitchRollGauge.css';
import { nextAngleShortest } from '../../utils/angles';

/**
 * A gauge component that displays pitch/roll with smooth rotation animation
 */
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

PitchRollGauge.propTypes = {
  src: PropTypes.string.isRequired,
  degree: PropTypes.number,
  alt: PropTypes.string,
  className: PropTypes.string
};
