// In src/Containers/PitchRoll/Gauge.jsx
import React from 'react';
import { usePartDegree } from '../../hooks/usePartDegree';
import GaugeBlock from './GaugeBlock';
import { PARTS_CONFIG } from '../../config/parts';
import { classifyAngle } from '../../utils/status';

export default function Gauge({ partId }) {
  const { degree, onSetDegree } = usePartDegree(partId);
  const config = PARTS_CONFIG[partId];
  const status = classifyAngle(degree);

  return <GaugeBlock item={{
    id: config.id,
    label: config.label,
    img: config.asset,
    alt: config.alt,
    degree: degree,
    onSet: onSetDegree,
    status: status,
  }} />;
}
