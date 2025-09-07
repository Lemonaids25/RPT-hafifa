import React from 'react';
import { PartsDegreeProvider } from './Managers/PartsDegreeContext';
import RotationBoxesContainer from './Layouts/RotationBoxesContainer';
import DegreeDisplaysContainer from './Layouts/DegreeDisplaysContainer';
import TankContainer from './Layouts/TankContainer';

function App() {
  return (
    <PartsDegreeProvider>
      <div>
        <DegreeDisplaysContainer />
        <RotationBoxesContainer />
        <TankContainer />
      </div>
    </PartsDegreeProvider>
  );
}

export default App;