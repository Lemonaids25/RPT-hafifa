import { ANGLE_CONSTANTS } from './constants';

export function normalize360(deg) {
  const normalized = deg % ANGLE_CONSTANTS.FULL_ROTATION;
  return normalized < 0 ? normalized + ANGLE_CONSTANTS.FULL_ROTATION : normalized;
}

export function normalize360Rounded(deg) {
  return Math.round(normalize360(deg));
}

export function normalize180(deg) {
  let normalized = deg % ANGLE_CONSTANTS.FULL_ROTATION;
  if (normalized >= ANGLE_CONSTANTS.HALF_ROTATION) normalized -= ANGLE_CONSTANTS.FULL_ROTATION;
  if (normalized < -ANGLE_CONSTANTS.HALF_ROTATION) normalized += ANGLE_CONSTANTS.FULL_ROTATION;
  return normalized;
}

export function nextAngleShortest(current, target) {
  const diff = normalize180(target - current);
  return current + diff;
}

export function toRelativeDegrees(absoluteDegrees, referencePart, normalize = true) {
  if (!referencePart) return absoluteDegrees;
  
  const refDegree = absoluteDegrees[referencePart] ?? 0;
  const result = {};
  
  for (const [part, degree] of Object.entries(absoluteDegrees)) {
    const relativeDeg = degree - refDegree;
    result[part] = normalize ? normalize180(relativeDeg) : relativeDeg;
  }
  
  return result;
}

export function compassDegreeRelative(absoluteDegrees, referencePart, offset = ANGLE_CONSTANTS.COMPASS_NORTH_OFFSET) {
  if (!referencePart) return offset;
  
  const refDegree = absoluteDegrees[referencePart] ?? 0;
  return normalize360(offset - refDegree);
}
