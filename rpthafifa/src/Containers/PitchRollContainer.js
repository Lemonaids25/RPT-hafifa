import React, { useState, useCallback } from 'react';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import PitchRollGauge from '../components/PitchRoll/PitchRollGauge';
import NumberSetReset from '../components/inputs/NumberSetReset';
import '../components/PitchRoll/PitchRollPanel.css';
import '../components/PitchRoll/PitchRollGauge.css';
import CollapseToggle from '../utils/CollapseToggle';
import DegreeDisplay from '../components/DegreeDisplay/DegreeDisplay';
import { classifyAngle } from '../utils/status';
import { GAUGES, STATUS_THRESHOLDS } from '../components/PitchRoll/const';

export default function PitchRollContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const pitch = usePartDegree('Pitch');
  const roll = usePartDegree('Roll');
  const toggle = useCallback(() => setCollapsed((v) => !v), []);

  const pitchStatus = classifyAngle(pitch.degree, STATUS_THRESHOLDS);
  const rollStatus = classifyAngle(roll.degree, STATUS_THRESHOLDS);

  const items = GAUGES.map((g) => {
    const s = g.id === 'Pitch'
      ? { degree: pitch.degree, onSet: pitch.onSet, onReset: pitch.onReset, status: pitchStatus }
      : { degree: roll.degree, onSet: roll.onSet, onReset: roll.onReset, status: rollStatus };
    return { ...g, ...s };
  });

  return (
    <div className="pr-vert-center">
      <div className={`pitch-roll-panel ${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="pr-content">
          {items.map((g) => (
            <div key={g.id} className="gauge-block">
              <DegreeDisplay label={''} value={g.degree} className={`gauge-degree ${g.status}`} />
              <div className={`gauge-circle ${g.status}`} aria-label={`${g.label} Gauge`}>
                {g.status === 'red' && <div className="critical-label">CRITICAL</div>}
                <PitchRollGauge src={g.src} degree={g.degree} alt={g.alt} className="gauge-image" />
              </div>
              <NumberSetReset onSet={g.onSet} onReset={g.onReset} placeholder={`Set ${g.label} (deg)`} />
            </div>
          ))}
        </div>

        <CollapseToggle collapsed={collapsed} onClick={toggle} />
      </div>
    </div>
  );
}
