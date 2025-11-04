import React from 'react';
import { useAPS } from '../../contexts';
import { APS_STATUS } from '../../utils/constants';
import { setLeverToPosition, getLeverPosition } from './const';
import { LEVER_LABEL } from '../../Containers/APSContainer/const';
import './APSLever.css';

const APSLever = () => {
  const { apsStatus, setApsStatus } = useAPS();

  return (
    <div className="aps-lever-container">
      <div className="aps-lever-labels">
        <div 
          className={`aps-label scan ${apsStatus === APS_STATUS.SCAN ? 'active' : ''}`}
          onClick={() => setLeverToPosition(APS_STATUS.SCAN, setApsStatus)}
        >
          {LEVER_LABEL.SCAN}
        </div>
        <div 
          className={`aps-label ready ${apsStatus === APS_STATUS.READY ? 'active' : ''}`}
          onClick={() => setLeverToPosition(APS_STATUS.READY, setApsStatus)}
        >
          {LEVER_LABEL.READY}
        </div>
        <div 
          className={`aps-label off ${apsStatus === APS_STATUS.OFF ? 'active' : ''}`}
          onClick={() => setLeverToPosition(APS_STATUS.OFF, setApsStatus)}
        >
          {LEVER_LABEL.OFF}
        </div>
      </div>
      
      <div className="aps-lever-track">
        <div className={`aps-lever-handle ${getLeverPosition(apsStatus)}`}>
          <div className="lever-grip"></div>
        </div>
      </div>
    </div>
  );
};

export default APSLever;
