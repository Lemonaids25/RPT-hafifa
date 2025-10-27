/**
 * Utility functions for angle calculations and normalization
 */

import { ANGLE_CONSTANTS } from './constants';

/**
 * Normalize angle to range [0, 360)
 * @param {number} deg - Angle in degrees
 * @returns {number} Normalized angle
 */
export function normalize360(deg) {
  const normalized = deg % ANGLE_CONSTANTS.FULL_ROTATION;
  return normalized < 0 ? normalized + ANGLE_CONSTANTS.FULL_ROTATION : normalized;
}

/**
 * Normalize angle to range [0, 360) and round to nearest integer
 * @param {number} deg - Angle in degrees
 * @returns {number} Normalized and rounded angle
 */
export function normalize360Rounded(deg) {
  return Math.round(normalize360(deg));
}

/**
 * Normalize angle to range [-180, 180)
 * @param {number} deg - Angle in degrees
 * @returns {number} Normalized angle
 */
export function normalize180(deg) {
  let normalized = deg % ANGLE_CONSTANTS.FULL_ROTATION;
  if (normalized >= ANGLE_CONSTANTS.HALF_ROTATION) normalized -= ANGLE_CONSTANTS.FULL_ROTATION;
  if (normalized < -ANGLE_CONSTANTS.HALF_ROTATION) normalized += ANGLE_CONSTANTS.FULL_ROTATION;
  return normalized;
}

/**
 * Calculate the shortest angular path from current to target angle
 * @param {number} current - Current angle
 * @param {number} target - Target angle
 * @returns {number} Shortest angle to reach target
 */
export function nextAngleShortest(current, target) {
  const diff = normalize180(target - current);
  return current + diff;
}

/**
 * Convert absolute degrees to relative degrees based on reference part
 * @param {Object} absoluteDegrees - Object mapping part names to absolute degrees
 * @param {string|null} referencePart - The reference part name (or null for absolute)
 * @param {boolean} normalize - Whether to normalize the result
 * @returns {Object} Object mapping part names to relative degrees
 */
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

/**
 * Calculate compass degree relative to reference part
 * @param {Object} absoluteDegrees - Object mapping part names to absolute degrees
 * @param {string|null} referencePart - The reference part name
 * @param {number} offset - Offset to apply (default: COMPASS_NORTH_OFFSET for North alignment)
 * @returns {number} Compass degree
 */
export function compassDegreeRelative(absoluteDegrees, referencePart, offset = ANGLE_CONSTANTS.COMPASS_NORTH_OFFSET) {
  if (!referencePart) return offset;
  
  const refDegree = absoluteDegrees[referencePart] ?? 0;
  return normalize360(offset - refDegree);
}
