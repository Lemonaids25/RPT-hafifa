import React, { useState, useCallback, useMemo } from 'react';
import { usePartDegree } from '../contexts/PartsDegreeContext';
import GaugeBlock from '../components/PitchRoll/GaugeBlock';
import { GAUGES, buildItems, buildStateById } from '../components/PitchRoll/const';
import { PART_IDS } from '../utils/constants';
import CollapseToggle from '../utils/CollapseToggle';
import '../components/PitchRoll/PitchRollPanel.css';
import '../components/PitchRoll/PitchRollGauge.css';

export default function PitchRollContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const pitch = usePartDegree(PART_IDS.PITCH);
  const roll = usePartDegree(PART_IDS.ROLL);
  const toggle = useCallback(() => setCollapsed((v) => !v), []);

  const stateById = useMemo(() => buildStateById(pitch, roll), [pitch, roll]);

  const items = useMemo(() => buildItems(GAUGES, stateById), [stateById]);

  return (
    <div className="pr-vert-center">
      <div className={`pitch-roll-panel ${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="pr-content">
          {items.map((item) => (
            <GaugeBlock key={item.id} item={item} />
          ))}
        </div>
        <CollapseToggle collapsed={collapsed} onClick={toggle} />
      </div>
    </div>
  );
}
