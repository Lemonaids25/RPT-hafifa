import React, { useState, useCallback, useMemo } from 'react';
import { usePartDegree } from '../../contexts/PartsDegreeContext';
import GaugeBlock from '../../components/PitchRoll/GaugeBlock';
import { buildItems } from '../../components/PitchRoll/const';
import { GAUGES } from './const';
import { PART_IDS } from '../../utils/constants';
import CollapseToggle from '../../components/CollapseToggle/CollapseToggle';
import './PitchRollPanel.css';

export default function PitchRollContainer() {  
  const [isCollapsed, setIsCollapsed] = useState(true);
  const pitch = usePartDegree(PART_IDS.PITCH);
  const roll = usePartDegree(PART_IDS.ROLL);
  const toggle = useCallback(() => setIsCollapsed((v) => !v), []);

  const items = useMemo(() => {
    const states = {
      [PART_IDS.PITCH]: pitch,
      [PART_IDS.ROLL]: roll
    };
    return buildItems(GAUGES, states);
  }, [pitch, roll]);
  return (
    <div className="pr-vert-center">
      <div className={`pitch-roll-panel ${isCollapsed ? 'collapsed' : 'expanded'}`}>
        <div className="pr-content">
          {items.map((item) => (
            <GaugeBlock key={item.id} {...item} />
          ))}
        </div>
        <CollapseToggle isCollapsed={isCollapsed} onClick={toggle} />
      </div>
    </div>
  );
}
