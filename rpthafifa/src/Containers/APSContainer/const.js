export const PAGE_TYPE = {
  HOME: 'home',
  THREATS: 'threats'
};

export const BUTTON_TEXT = {
  THREAT_INPUTS: 'THREAT INPUTS',
  HOME: 'HOME'
};

export const LEVER_POSITION = {
  TOP: 'top',
  MIDDLE: 'middle',
  BOTTOM: 'bottom'
};

export const LEVER_LABEL = {
  SCAN: 'SCAN',
  READY: 'READY',
  OFF: 'OFF'
};

export const getButtonText = (pageType) => {
  switch (pageType) {
    case PAGE_TYPE.HOME:
      return BUTTON_TEXT.THREAT_INPUTS;
    case PAGE_TYPE.THREATS:
      return BUTTON_TEXT.HOME;
    default:
      return '';
  }
};
