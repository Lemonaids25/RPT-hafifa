import React from 'react';
import PropTypes from 'prop-types';
import PitchRollGauge from './PitchRollGauge';
import NumberSetReset from '../inputs/NumberSetReset';
import DegreeDisplay from '../DegreeDisplay/DegreeDisplay';

export default function GaugeBlock({ item }) {
  const { label, alt, src, degree, status, onSet, onReset } = item;
  return (
    <div className="gauge-block">
      <DegreeDisplay label={''} value={degree} className={`gauge-degree ${status}`} />
      <div className={`gauge-circle ${status}`} aria-label={`${label} Gauge`}>
        {status === 'red' && <div className="critical-label">CRITICAL</div>}
        <PitchRollGauge src={src} degree={degree} alt={alt} className="gauge-image" />
      </div>
      <NumberSetReset onSet={onSet} onReset={onReset} placeholder={`Set ${label} (deg)`} />
    </div>
  );
}

GaugeBlock.propTypes = {
  item: PropTypes.shape({
    label: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    degree: PropTypes.number.isRequired,
    status: PropTypes.oneOf(['green', 'orange', 'red']).isRequired,
    onSet: PropTypes.func.isRequired,
    onReset: PropTypes.func
  }).isRequired
};
