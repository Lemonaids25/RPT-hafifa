import { createContext, useContext, useState } from 'react';
import { APS_STATUS } from '../utils/constants';

const APSContext = createContext();

export const useAPS = () => {
  const context = useContext(APSContext);
  if (!context) {
    throw new Error('useAPS must be used within APSProvider');
  }
  return context;
};

export const APSProvider = ({ children }) => {
  const [apsStatus, setApsStatus] = useState(APS_STATUS.OFF);

  const value = {
    apsStatus,
    setApsStatus,
    isScanning: apsStatus === APS_STATUS.SCAN,
    isReady: apsStatus === APS_STATUS.READY,
    isOff: apsStatus === APS_STATUS.OFF
  };

  return <APSContext.Provider value={value}>{children}</APSContext.Provider>;
};
