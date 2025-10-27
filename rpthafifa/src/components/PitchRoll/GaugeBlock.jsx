import React from 'react';
import PitchRollGauge from './PitchRollGauge';
import NumberSetReset from '../inputs/NumberSetReset';
import DegreeDisplay from '../DegreeDisplay/DegreeDisplay';
import { STATUS } from '../../utils/constants';

export default function GaugeBlock({ label, alt, src, degree, status, onSet, onReset }) {
  return (
    <div className="gauge-block">
      <DegreeDisplay label={''} value={degree} className={`gauge-degree ${status}`} />
      <div className={`gauge-circle ${status}`} aria-label={`${label} Gauge`}>
        {status === STATUS.RED && <div className="critical-label">{STATUS.CRITICAL}</div>}
        <PitchRollGauge src={src} degree={degree} alt={alt} className="gauge-image" />
      </div>
      <NumberSetReset currentValue={degree} onSet={onSet} onReset={onReset} placeholder={`Set ${label} (deg)`} />
    </div>
  );
}

