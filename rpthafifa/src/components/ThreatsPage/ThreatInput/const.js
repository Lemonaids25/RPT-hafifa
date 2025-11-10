// Constants for threat input validation and UI
export const THREAT_DISTANCE_MIN = 0;
export const THREAT_DISTANCE_MAX = 3000;
export const THREAT_DEGREES_MIN = 0;
export const THREAT_DEGREES_MAX = 360;

export const ERROR_MESSAGES = {
  EMPTY_FIELDS: 'Please enter both degrees and distance',
  INVALID_NUMBERS: 'Please enter valid numbers',
  INVALID_DISTANCE: `Distance must be between ${THREAT_DISTANCE_MIN} and ${THREAT_DISTANCE_MAX}m`
};

export const INPUT_LABELS = {
  DEGREES: 'Degrees (relative to hull)',
  DISTANCE: 'Distance (meters)'
};

export const INPUT_PLACEHOLDERS = {
  DEGREES: `${THREAT_DEGREES_MIN}-${THREAT_DEGREES_MAX}`,
  DISTANCE: `${THREAT_DISTANCE_MIN}-${THREAT_DISTANCE_MAX}`
};

export const BUTTON_TEXT = {
  ADD: 'Add Threat',
  CLEAR_ALL: 'Clear All'
};

export const UI_TEXT = {
  TITLE: 'Threat Inputs',
  ACTIVE_THREATS: 'Active Threats',
  NO_THREATS: 'No threats detected'
};

// Validation helper function
export const validateThreatInput = (degrees, distance) => {
  if (degrees === '' || distance === '') {
    return { valid: false, error: ERROR_MESSAGES.EMPTY_FIELDS };
  }

  const degreesNum = parseFloat(degrees);
  const distanceNum = parseFloat(distance);

  if (isNaN(degreesNum) || isNaN(distanceNum)) {
    return { valid: false, error: ERROR_MESSAGES.INVALID_NUMBERS };
  }

  if (distanceNum < THREAT_DISTANCE_MIN || distanceNum > THREAT_DISTANCE_MAX) {
    return { valid: false, error: ERROR_MESSAGES.INVALID_DISTANCE };
  }

  return { valid: true, degreesNum, distanceNum };
};
