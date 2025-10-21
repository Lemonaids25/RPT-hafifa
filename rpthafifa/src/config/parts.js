import { PART_IDS } from './constants';
import tankHullPng from '../assets/tank-hull.png';
import tankTurretPng from '../assets/tank-turret.png';
import commanderSightPng from '../assets/commander-sight.png';

/**
 * Configuration for tank parts that can be rotated
 */
export const ROTATION_PARTS = [
  {
    id: PART_IDS.HULL,
    label: 'Hull Rotation',
    displayLabel: 'Hull',
    className: 'hull'
  },
  {
    id: PART_IDS.TURRET,
    label: 'Turret Rotation',
    displayLabel: 'Turret',
    className: 'turret'
  },
  {
    id: PART_IDS.COMMANDER_SIGHT,
    label: 'Sight Rotation',
    displayLabel: 'Sight',
    className: 'sight'
  }
];

/**
 * Configuration for tank visual components
 */
export const TANK_COMPONENTS = [
  {
    id: PART_IDS.HULL,
    src: tankHullPng,
    alt: 'Hull Rotation',
    className: 'tank-hull-style'
  },
  {
    id: PART_IDS.TURRET,
    src: tankTurretPng,
    alt: 'Turret Rotation',
    className: 'tank-turret-style'
  },
  {
    id: PART_IDS.COMMANDER_SIGHT,
    src: commanderSightPng,
    alt: 'Commander Sight Rotation',
    className: 'commander-sight-style'
  }
];

/**
 * Get part configuration by ID
 * @param {string} partId - The part ID
 * @returns {Object|undefined} Part configuration object
 */
export function getPartById(partId) {
  return ROTATION_PARTS.find(part => part.id === partId);
}

/**
 * Get tank component configuration by ID
 * @param {string} partId - The part ID
 * @returns {Object|undefined} Tank component configuration object
 */
export function getTankComponentById(partId) {
  return TANK_COMPONENTS.find(comp => comp.id === partId);
}
