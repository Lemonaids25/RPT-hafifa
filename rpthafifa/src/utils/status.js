import { normalize180 } from './angles';

export const DEFAULT_ANGLE_THRESHOLDS = { green: 12, orange: 20 };

export function classifyAngle(value, thresholds = DEFAULT_ANGLE_THRESHOLDS) {
  const a = Math.abs(normalize180(value));
  if (a <= thresholds.green) return 'green';
  if (a <= thresholds.orange) return 'orange';
  return 'red';
}
