import React from 'react';
import { PartsDegreeProvider } from './Managers/PartsDegreeContext';
import RotationBoxesContainer from './Containers/RotationBoxesContainer.js';
import DegreeDisplaysContainer from './Containers/DegreeDisplaysContainer.js';
import TankContainer from './Containers/TankContainer.js';
import PitchRollContainer from './Containers/PitchRollContainer.js';

function App() {
  return (
    <PartsDegreeProvider>
      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch', gap: 16 }}>
        <div style={{ minWidth: 200 }}>
          <PitchRollContainer />
        </div>
        <div style={{ flex: 1 }}>
          <DegreeDisplaysContainer />
          <TankContainer />
        </div>
        <div style={{ minWidth: 260 }}>
          <RotationBoxesContainer />
        </div>
      </div>
    </PartsDegreeProvider>
  );
}

export default App;