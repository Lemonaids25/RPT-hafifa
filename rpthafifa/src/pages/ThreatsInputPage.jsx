import React, { useEffect } from 'react';
import { useAPS } from '../contexts';
import APSContainer from '../Containers/APSContainer/APSContainer';
import DDRadar from '../components/DDRadar/DDRadar';
import ThreatInput from '../components/ThreatInput/ThreatInput';
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
    <div className="app-layout">
      <div className="threat-input-section">
        <ThreatInput />
      </div>
      <div className="dd-radar-section">
        <DDRadar />
      </div>
      <div className="aps-control-section-left">
        <APSContainer 
          pageType={PAGE_TYPE.THREATS}
          onButtonClick={onNavigateHome}
          showButtonAlways={true}
        />
      </div>
    </div>
  );
};

export default ThreatsInputPage;
