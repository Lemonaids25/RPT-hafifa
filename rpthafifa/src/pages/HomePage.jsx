import React from 'react';
import RotationBoxesContainer from '../Containers/RotationBoxesContainer/RotationBoxesContainer';
import DegreeDisplaysContainer from '../Containers/DegreeDisplaysContainer/DegreeDisplaysContainer';
import TankContainer from '../Containers/TankContainer';
import PitchRollContainer from '../Containers/PitchRollContainer/PitchRollContainer';
import APSContainer from '../Containers/APSContainer/APSContainer';
import { PAGE_TYPE } from '../Containers/APSContainer/const';
import './HomePage.css';

const HomePage = ({ onNavigateToThreats }) => {
  return (
    <div className="app-layout">
      <div className="pitch-roll-container">
        <PitchRollContainer />
      </div>
      <div className="main-tank-display-container">
        <DegreeDisplaysContainer />
        <TankContainer />
      </div>
      <div className="input-controls-container">
        <div className="aps-control-section">
          <APSContainer 
            pageType={PAGE_TYPE.HOME}
            onButtonClick={onNavigateToThreats} 
          />
        </div>
        <RotationBoxesContainer />
      </div>
    </div>
  );
};

export default HomePage;
