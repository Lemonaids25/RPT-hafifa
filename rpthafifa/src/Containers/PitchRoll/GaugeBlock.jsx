import React from 'react';
import PitchRollGauge from '../../components/PitchRoll/PitchRollGauge';
import NumberSetReset from '../../components/inputs/NumberSetReset';
import DegreeDisplay from '../../components/DegreeDisplay/DegreeDisplay';

export default function GaugeBlock({ label, alt, img, degree, status, onSet, onReset }) {
  return (
    <div className="gauge-block">
      <DegreeDisplay label={''} value={degree} className={`gauge-degree ${status}`} />
      <div className={`gauge-circle ${status}`} aria-label={`${label} Gauge`}>
        {status === 'red' && <div className="critical-label">CRITICAL</div>}
        <PitchRollGauge src={img} degree={degree} alt={alt} className="gauge-image" />
      </div>
      <NumberSetReset onSet={onSet} onReset={onReset} placeholder={`Set ${label} (deg)`} />
    </div>
  );
}
