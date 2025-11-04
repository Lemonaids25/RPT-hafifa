export const PART_IDS = {
  HULL: 'Hull',
  TURRET: 'Turret',
  COMMANDER_SIGHT: 'Commander Sight',
  PITCH: 'Pitch',
  ROLL: 'Roll'
};

export const ALL_PARTS = [
  PART_IDS.HULL,
  PART_IDS.TURRET,
  PART_IDS.COMMANDER_SIGHT,
  PART_IDS.PITCH,
  PART_IDS.ROLL
];

export const INITIAL_DEGREES = {
  [PART_IDS.HULL]: 0,
  [PART_IDS.TURRET]: 0,
  [PART_IDS.COMMANDER_SIGHT]: 0,
  [PART_IDS.PITCH]: 0,
  [PART_IDS.ROLL]: 0
};

export const ANGLE_CONSTANTS = {
  COMPASS_NORTH_OFFSET: 90,
  FULL_ROTATION: 360,
  HALF_ROTATION: 180
};

export const STATUS = {
  GREEN: 'green',
  ORANGE: 'orange',
  RED: 'red'
};

export const STATUS_LABEL = {
  CRITICAL: 'CRITICAL'
};

export const APS_STATUS = {
  SCAN: 'scan',
  READY: 'ready',
  OFF: 'off'
};
