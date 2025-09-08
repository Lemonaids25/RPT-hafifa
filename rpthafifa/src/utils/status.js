import { normalize180 } from './angles';

// thresholds: { green: number, orange: number }
// returns 'green' | 'orange' | 'red'
export function classifyAngle(value, thresholds = { green: 12, orange: 20 }) {
  const a = Math.abs(normalize180(value));
  if (a <= thresholds.green) return 'green';
  if (a <= thresholds.orange) return 'orange';
  return 'red';
}
