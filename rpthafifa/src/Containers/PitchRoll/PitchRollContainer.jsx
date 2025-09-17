import React, { useState, useCallback } from 'react';
import { useAllDegrees, usePartDegree } from '../../Managers/PartsDegreeContext';
import GaugeBlock from './GaugeBlock';
import '../../components/PitchRoll/PitchRollPanel.css';
import '../../components/PitchRoll/PitchRollGauge.css';
import CollapseToggle from '../../utils/CollapseToggle';
import { GAUGE_PART_IDS, PARTS_CONFIG } from '../../config/parts';
import { classifyAngle } from '../../utils/status';

function Gauge({ partId }) { // This outside the main component, either put it inside or build a new file for it
  const { degree, onSet } = usePartDegree(partId); // onSet what? | shouldn't be hook
  const config = PARTS_CONFIG[partId];
  const status = classifyAngle(degree);
  const item = {
    id: config.id,
    label: config.label,
    img: config.asset,
    alt: config.alt,
    degree: degree,
    onSet: onSet,
    status: status,
  }; // not needed | Also item name is very generic
  return <GaugeBlock item={item} />;
}

export default function PitchRollContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = useCallback(() => setCollapsed((v) => !v), []);

  return (
    <div className="pr-vert-center">
      <div className={`pitch-roll-panel ${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="pr-content">
          {GAUGE_PART_IDS.map((partId) => (
            <Gauge key={partId} partId={partId} />
          ))}
        </div>
        <CollapseToggle collapsed={collapsed} onClick={toggle} />
      </div>
    </div>
  );
}
