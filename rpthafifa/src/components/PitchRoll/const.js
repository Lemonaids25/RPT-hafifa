import { STATUS } from '../../utils/constants';

export function getStatus(degree, thresholds) {
  const absDegree = Math.abs(degree);
  if (absDegree <= thresholds.green) return STATUS.GREEN;
  if (absDegree <= thresholds.orange) return STATUS.ORANGE;
  return STATUS.RED;
}

export function buildItems(gauges, states) {
  return gauges.map((gauge) => {
    const state = states[gauge.id];
    const degree = state?.degree ?? 0;
    const status = getStatus(degree, gauge.thresholds);
    
    return {
      id: gauge.id,
      label: gauge.label,
      alt: gauge.alt,
      src: gauge.src,
      degree,
      status,
      onSet: state?.onSet,
      thresholds: gauge.thresholds
    }; // Think a bit more about this
  });
}
