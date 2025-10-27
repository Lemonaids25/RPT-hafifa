import pitchImage from '../../assets/tank-side-view.png';
import rollImage from '../../assets/tank-back-view.png';
import { PART_IDS } from '../../utils/constants';

export const GAUGES = [
  {
    id: PART_IDS.PITCH,
    label: 'Pitch',
    src: pitchImage,
    alt: 'Pitch Gauge',
    thresholds: { green: 10, orange: 20 }
  },
  {
    id: PART_IDS.ROLL,
    label: 'Roll',
    src: rollImage,
    alt: 'Roll Gauge',
    thresholds: { green: 10, orange: 20 }
  }
];
