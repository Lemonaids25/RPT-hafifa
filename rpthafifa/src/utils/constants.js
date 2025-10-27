/**
 * Centralized constants for the application
 */

// Part ID constants for type safety and consistency
export const PART_IDS = {
  HULL: 'Hull',
  TURRET: 'Turret',
  COMMANDER_SIGHT: 'Commander Sight',
  PITCH: 'Pitch',
  ROLL: 'Roll'
};

// All parts in the system
export const ALL_PARTS = [
  PART_IDS.HULL,
  PART_IDS.TURRET,
  PART_IDS.COMMANDER_SIGHT,
  PART_IDS.PITCH,
  PART_IDS.ROLL
];

// Initial degree values for all parts
export const INITIAL_DEGREES = {
  [PART_IDS.HULL]: 0,
  [PART_IDS.TURRET]: 0,
  [PART_IDS.COMMANDER_SIGHT]: 0,
  [PART_IDS.PITCH]: 0,
  [PART_IDS.ROLL]: 0
};

export const ANGLE_CONSTANTS = {
  COMPASS_NORTH_OFFSET: 90,  // Offset to align compass
  FULL_ROTATION: 360,         
  HALF_ROTATION: 180          
};
