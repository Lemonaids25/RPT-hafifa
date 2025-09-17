import React, { useState, useCallback } from 'react';
import GaugeBlock from '../GaugeBlocks/GaugeBlock';
import './PitchRollPanel.css';
import '../GaugeBlocks/PitchRollGauge.css';
import CollapseToggle from '../../../utils/CollapseToggle';
import { GAUGE_PART_IDS } from '../../../config/parts';

export default function PitchRollContainer() {
  const [collapsed, setCollapsed] = useState(false);
  const toggle = useCallback(() => setCollapsed((v) => !v), []);

  return (
    <div className="pr-vert-center">
      <div className={`pitch-roll-panel ${collapsed ? 'collapsed' : 'expanded'}`}>
        <div className="pr-content">
          {GAUGE_PART_IDS.map((partId) => (
            <GaugeBlock key={partId} partId={partId} />
          ))}
        </div>
        <CollapseToggle collapsed={collapsed} onClick={toggle} />
      </div>
    </div>
  );
}
