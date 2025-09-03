import tankHullPng from '../assets/tank-hull.png';
import tankTurretPng from '../assets/tank-turret.png';
import commanderSight from '../assets/commander-sight.png';
import compassPng from '../assets/360-degrees.png';

import { TANK_COMPONENT_TOP, INPUT_BOX_BASE_TOP, INPUT_BOX_LEFT_PERC, INPUT_BOX_SPACING, TANK_COMPONENT_WIDTH } from '../constants.js';

const tankParts = [
    {
    src: compassPng,
    alt: 'Compass',
    isStatic: true, // Add a flag to indicate this part does not rotate
    tankStyle: {
      top: `${TANK_COMPONENT_TOP}px`,
      left: '50%',
      transform: 'translateX(-50%)',
      width: TANK_COMPONENT_WIDTH,
      height: 'auto',
      zIndex: 1,
      pointerEvents: 'none',
      userSelect: 'none'
    }
  },
  {
    src: tankHullPng,
    alt: 'Tank Hull',
    placeholder: 'Hull Rotation',
    rotationBoxStyle: {
      position: 'absolute',
      top: INPUT_BOX_BASE_TOP,
      left: `${INPUT_BOX_LEFT_PERC}%`
    },
    tankStyle: {
      top: `${TANK_COMPONENT_TOP}px`,
      width: TANK_COMPONENT_WIDTH,
      height: 'auto'
    }
  },
  {
    src: tankTurretPng,
    alt: 'Tank Turret',
    placeholder: 'Turret Rotation',
    rotationBoxStyle: {
      position: 'absolute',
      top: INPUT_BOX_SPACING,
      left: `${INPUT_BOX_LEFT_PERC}%`
    },
    tankStyle: {
      top: `${TANK_COMPONENT_TOP}px`,
      width: TANK_COMPONENT_WIDTH,
      height: 'auto'
    }
  },
  {
    src: commanderSight,
    alt: 'Commander Sight',
    placeholder: 'Sight Rotation',
    rotationBoxStyle: {
      position: 'absolute',
      top: (INPUT_BOX_SPACING * 2) - INPUT_BOX_BASE_TOP,
      left: `${INPUT_BOX_LEFT_PERC}%`
    },
    tankStyle: {
      top: `${TANK_COMPONENT_TOP}px`,
      width: TANK_COMPONENT_WIDTH,
      height: 'auto'
    }
  }
];

export default tankParts;