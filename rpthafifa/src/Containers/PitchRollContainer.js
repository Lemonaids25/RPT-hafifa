import React, { useState, useCallback, useMemo } from 'react';
import { usePartDegree } from '../Managers/PartsDegreeContext';
import GaugeBlock from './GaugeBlock';
import '../components/PitchRoll/PitchRollPanel.css';
import '../components/PitchRoll/PitchRollGauge.css';
import CollapseToggle from '../utils/CollapseToggle';
import { GAUGES, buildItems, buildStateById } from '../components/PitchRoll/const';


export default function PitchRollContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const pitch = usePartDegree('Pitch');
  const roll = usePartDegree('Roll');
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
