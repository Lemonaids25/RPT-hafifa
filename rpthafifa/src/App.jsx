import React from 'react';
import { PartsDegreeProvider } from './context/PartsDegreeContext.jsx';
import { PreviewDegreeProvider } from './context/PreviewDegreeContext.jsx';
import RotationBoxesContainer from './Containers/RotationBoxes/RotationBoxesContainer.jsx';
import DegreeDisplaysContainer from './Containers/DegreeDisplay/DegreeDisplaysContainer.jsx';
import TankContainer from './Containers/Tank/TankContainer.jsx';
import PitchRollContainer from './Containers/PitchRoll/Panel/PitchRollContainer.jsx';
import './App.css';

function App() {
  return (
    <PartsDegreeProvider>
      <PreviewDegreeProvider>
      <div className="app-layout">
        <div className="pitch-roll-container"> 
          {/* ClassName -> App-left? -> ID | pitch-roll-container */}
          <PitchRollContainer />
        </div>
        <div className="tank-container">
          <DegreeDisplaysContainer />
          <TankContainer />
        </div>
        <div className="inputs-container">
          <RotationBoxesContainer />
        </div>
      </div>
      </PreviewDegreeProvider>
    </PartsDegreeProvider>
  );
}

export default App;