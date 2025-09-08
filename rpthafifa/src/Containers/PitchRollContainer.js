import React, { useState, useCallback } from 'react';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import NumberSetReset from '../components/inputs/NumberSetReset';
import PitchRollGauge from '../components/PitchRoll/PitchRollGauge';
import '../components/PitchRoll/PitchRollPanel.css';
import { classifyAngle } from '../utils/status';
import { GAUGES, STATUS_THRESHOLDS } from '../components/PitchRoll/const';

export default function PitchRollContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const pitch = usePartDegree('Pitch');
  const roll = usePartDegree('Roll');
  const toggle = useCallback(() => setCollapsed((v) => !v), []);

  const pitchStatus = classifyAngle(pitch.degree, STATUS_THRESHOLDS);
  const rollStatus = classifyAngle(roll.degree, STATUS_THRESHOLDS);

  const mapIdToState = {
    Pitch: {
      degree: pitch.degree,
      onSet: pitch.onSet,
      onReset: pitch.onReset,
      status: pitchStatus,
    },
    Roll: {
      degree: roll.degree,
      onSet: roll.onSet,
      onReset: roll.onReset,
      status: rollStatus,
    },
  };

  return (
    <div className="pr-vert-center">
      <div className={`pitch-roll-panel ${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="pr-content">
          {GAUGES.map((g) => {
            const s = mapIdToState[g.id];
            return (
              <div key={g.id} className="gauge-block">
                <div className={`gauge-circle ${s.status}`} aria-label={`${g.label} Gauge`}>
                  {s.status === 'red' && <div className="critical-label">CRITICAL</div>}
                  <PitchRollGauge src={g.src} degree={s.degree} alt={g.alt} className="gauge-image" />
                </div>
                <NumberSetReset onSet={s.onSet} onReset={s.onReset} placeholder={`Set ${g.label} (deg)`} />
              </div>
            );
          })}
        </div>

        <button
          className="collapse-toggle"
          aria-label={collapsed ? 'Show Pitch and Roll' : 'Hide Pitch and Roll'}
          onClick={toggle}
          title={collapsed ? 'Expand' : 'Collapse'}
        >
          {collapsed ? '›' : '‹'}
        </button>
      </div>
    </div>
  );
}
