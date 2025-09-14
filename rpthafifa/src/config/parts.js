import hullImg from '../assets/tank-hull.png';
import turretImg from '../assets/tank-turret.png';
import sightImg from '../assets/commander-sight.png';
import sideViewImg from '../assets/tank-side-view.png';
import backViewImg from '../assets/tank-back-view.png';
import compassImg from '../assets/360-degrees.png';

export const PART_TYPES = {
  ROTATIONAL: 'rotational',
  GAUGE: 'gauge',
};

export const PARTS_CONFIG = {
  Hull: {
    id: 'Hull',
    label: 'Hull',
    type: PART_TYPES.ROTATIONAL,
    asset: hullImg,
    className: 'tank-hull-style',
    alt: 'Tank Hull',
  },
  Turret: {
    id: 'Turret',
    label: 'Turret',
    type: PART_TYPES.ROTATIONAL,
    asset: turretImg,
    className: 'tank-turret-style',
    alt: 'Tank Turret',
  },
  'Commander Sight': {
    id: 'Commander Sight',
    label: 'Sight',
    type: PART_TYPES.ROTATIONAL,
    asset: sightImg,
    className: 'commander-sight-style',
    alt: 'Commander Sight',
  },
  Pitch: {
    id: 'Pitch',
    label: 'Pitch',
    type: PART_TYPES.GAUGE,
    asset: sideViewImg,
    alt: 'Tank Side View',
  },
  Roll: {
    id: 'Roll',
    label: 'Roll',
    type: PART_TYPES.GAUGE,
    asset: backViewImg,
    alt: 'Tank Back View',
  },
};

export const COMPASS_CONFIG = {
  id: 'Compass',
  asset: compassImg,
  className: 'compass-style',
  alt: 'Compass',
};

export const ALL_PART_IDS = Object.keys(PARTS_CONFIG);
export const ROTATIONAL_PART_IDS = ALL_PART_IDS.filter(id => PARTS_CONFIG[id].type === PART_TYPES.ROTATIONAL);
export const GAUGE_PART_IDS = ALL_PART_IDS.filter(id => PARTS_CONFIG[id].type === PART_TYPES.GAUGE);
