import React from 'react';
import { PartsDegreeProvider } from './Managers/PartsDegreeContext.jsx';
import { PreviewDegreeProvider } from './Managers/PreviewDegreeContext.jsx';
import RotationBoxesContainer from './Containers/RotationBoxesContainer.jsx';
import DegreeDisplaysContainer from './Containers/DegreeDisplaysContainer.jsx';
import TankContainer from './Containers/Tank/TankContainer.jsx';
import PitchRollContainer from './Containers/PitchRoll/PitchRollContainer.jsx';
import './App.css';

function App() {
  return (
    <PartsDegreeProvider>
      <PreviewDegreeProvider>
      <div className="app-layout">
        <div className="app-left">
          <PitchRollContainer />
        </div>
        <div className="app-main">
          <DegreeDisplaysContainer />
          <TankContainer />
        </div>
        <div className="app-right">
          <RotationBoxesContainer />
        </div>
      </div>
      </PreviewDegreeProvider>
    </PartsDegreeProvider>
  );
}

export default App;