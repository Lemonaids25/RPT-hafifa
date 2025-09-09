import React from 'react';
import { PartsDegreeProvider } from './Managers/PartsDegreeContext';
import RotationBoxesContainer from './Containers/RotationBoxesContainer.js';
import DegreeDisplaysContainer from './Containers/DegreeDisplaysContainer.js';
import TankContainer from './Containers/TankContainer.js';
import PitchRollContainer from './Containers/PitchRollContainer.js';
import './App.css';

function App() {
  return (
    <PartsDegreeProvider>
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
    </PartsDegreeProvider>
  );
}

export default App;