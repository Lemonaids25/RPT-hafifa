import { TARGETING_MODE } from '../../../contexts';

export const LEVER_LABELS = {
  [TARGETING_MODE.MANUAL]: 'MANUAL',
  [TARGETING_MODE.AUTOMATIC]: 'AUTOMATIC'
};

export const setLeverPosition = (setter, mode) => {
  setter(mode);
};
