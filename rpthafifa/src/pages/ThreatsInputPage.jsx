import React, { useEffect } from 'react';
import { useAPS } from '../contexts';
import APSContainer from '../Containers/APSContainer/APSContainer';
import { PAGE_TYPE } from '../Containers/APSContainer/const';
import './ThreatsInputPage.css';

const ThreatsInputPage = ({ onNavigateHome }) => {
  const { isScanning } = useAPS();

  useEffect(() => {
    if (!isScanning) {
      onNavigateHome();
    }
  }, [isScanning, onNavigateHome]);

  return (
    <div className="threats-input-page">
      <div className="threats-content">
        <div className="aps-control-section">
          <APSContainer 
            pageType={PAGE_TYPE.THREATS}
            onButtonClick={onNavigateHome}
            showButtonAlways={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ThreatsInputPage;
