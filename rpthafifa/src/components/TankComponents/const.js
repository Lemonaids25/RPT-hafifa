import tankHullPng from '../../assets/tank-hull.png';
import tankTurretPng from '../../assets/tank-turret.png';
import commanderSight from '../../assets/commander-sight.png';
import compassPng from '../../assets/360-degrees.png';

const tankPartsLayout = [ //move to whoever uses this
  {
    name: 'Compass',
    src: compassPng,
    isStatic: true,
    className: 'compass-style',
  },
  {
    name: 'Hull',
    src: tankHullPng,
    placeholder: 'Hull Rotation',
    className: 'tank-hull-style'
  },
  {
    name: 'Turret',
    src: tankTurretPng,
    placeholder: 'Turret Rotation',
    className: 'tank-turret-style'
  },
  {
    name: 'Commander Sight',
    src: commanderSight,
    placeholder: 'Sight Rotation',
    className: 'commander-sight-style'
  }
];

export default tankPartsLayout;