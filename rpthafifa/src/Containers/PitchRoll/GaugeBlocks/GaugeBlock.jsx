import React from 'react';
import PitchRollGauge from '../../../components/PitchRoll/PitchRollGauge';
import NumberSetReset from '../../../components/inputs/NumberSetReset';
import DegreeDisplay from '../../../components/DegreeDisplay/DegreeDisplay';
import { usePartDegree } from '../../../context/PartsDegreeContext';
import { PARTS_CONFIG } from '../../../config/parts';
import { classifyAngle } from '../../../utils/status';

export default function GaugeBlock({ partId, onReset }) {
  const { degree, onSet: onSetDegree } = usePartDegree(partId);
  const config = PARTS_CONFIG[partId];
  const status = classifyAngle(degree);
// onSet what? | shouldn't be hook
  return (
    <div className="gauge-block">
      <DegreeDisplay label={''} value={degree} className={`gauge-degree ${status}`} />
      <div className={`gauge-circle ${status}`} aria-label={`${config.label} Gauge`}>
        {status === 'red' && <div className="critical-label">CRITICAL</div>}
        <PitchRollGauge src={config.asset} degree={degree} alt={config.alt} className="gauge-image" />
      </div>
      <NumberSetReset onSetDegree={onSetDegree} onReset={onReset} placeholder={`Set ${config.label} (deg)`} />
    </div>
  );
}
