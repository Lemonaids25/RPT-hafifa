import { normalize180 } from './angles';

// Default thresholds for angle status classification
export const DEFAULT_ANGLE_THRESHOLDS = { green: 12, orange: 20 };

// thresholds: { green: number, orange: number }
// returns 'green' | 'orange' | 'red'
export function classifyAngle(value, thresholds = DEFAULT_ANGLE_THRESHOLDS) {
  const a = Math.abs(normalize180(value));
  if (a <= thresholds.green) return 'green';
  if (a <= thresholds.orange) return 'orange';
  return 'red';
}
