import { APS_STATUS } from '../../utils/constants';
import { LEVER_POSITION } from '../../Containers/APSContainer/const';

export const setLeverToPosition = (targetStatus, setApsStatus) => {
  setApsStatus(targetStatus);
};

export const getLeverPosition = (apsStatus) => {
  switch (apsStatus) {
    case APS_STATUS.SCAN:
      return LEVER_POSITION.TOP;
    case APS_STATUS.READY:
      return LEVER_POSITION.MIDDLE;
    case APS_STATUS.OFF:
    default:
      return LEVER_POSITION.BOTTOM;
  }
};
