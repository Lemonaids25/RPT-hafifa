import pitchImage from '../../assets/tank-side-view.png';
import rollImage from '../../assets/tank-back-view.png';
import { PART_IDS } from '../../config/constants';

/**
 * Configuration for pitch and roll gauges
 */
export const GAUGES = [
  {
    id: PART_IDS.PITCH,
    label: 'Pitch',
    src: pitchImage,
    alt: 'Pitch Gauge',
    thresholds: { green: 10, orange: 20 } // degrees
  },
  {
    id: PART_IDS.ROLL,
    label: 'Roll',
    src: rollImage,
    alt: 'Roll Gauge',
    thresholds: { green: 10, orange: 20 } // degrees
  }
];

/**
 * Determine status color based on degree value and thresholds
 * @param {number} degree - Current degree value
 * @param {Object} thresholds - Object with green and orange threshold values
 * @returns {string} Status color: 'green', 'orange', or 'red'
 */
export function getStatus(degree, thresholds) {
  const absDegree = Math.abs(degree);
  if (absDegree <= thresholds.green) return 'green';
  if (absDegree <= thresholds.orange) return 'orange';
  return 'red';
}

/**
 * Build state object by gauge ID
 * @param {Object} pitch - Pitch state from usePartDegree
 * @param {Object} roll - Roll state from usePartDegree
 * @returns {Object} Map of gauge ID to state object
 */
export function buildStateById(pitch, roll) {
  return {
    [PART_IDS.PITCH]: pitch,
    [PART_IDS.ROLL]: roll
  };
}

/**
 * Build gauge items with all necessary data and handlers
 * @param {Array} gauges - Array of gauge configurations
 * @param {Object} stateById - Map of gauge ID to state
 * @returns {Array} Array of gauge items ready for rendering
 */
export function buildItems(gauges, stateById) {
  return gauges.map((gauge) => {
    const state = stateById[gauge.id];
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
    };
  });
}
