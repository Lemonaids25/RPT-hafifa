import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PartsDegreeProvider } from './context/PartsDegreeContext.jsx';
import { PreviewDegreeProvider } from './context/PreviewDegreeContext.jsx';
import { WindCoatProvider } from './context/WindCoatContext.jsx';
import RotationBoxesContainer from './Containers/RotationBoxes/RotationBoxesContainer.jsx';
import DegreeDisplaysContainer from './Containers/DegreeDisplay/DegreeDisplaysContainer.jsx';
import TankContainer from './Containers/Tank/TankContainer.jsx';
import PitchRollContainer from './Containers/PitchRoll/Panel/PitchRollContainer.jsx';
import WindCoatContainer from './Containers/WindCoat/WindCoatContainer.jsx';
import DefenseSector from './pages/DefenseSector.jsx';
import './App.css';

const MainPage = () => (
  <div className="app-layout">
    <div className="pitch-roll-container">
      <PitchRollContainer />
    </div>
    <div className="tank-container">
      <DegreeDisplaysContainer />
      <TankContainer />
    </div>
    <div className="inputs-container">
      <WindCoatContainer />
      <RotationBoxesContainer />
    </div>
  </div>
);

function App() {
  return (
    <PartsDegreeProvider>
      <PreviewDegreeProvider>
        <WindCoatProvider>
          <Router>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/defense-sector" element={<DefenseSector />} />
            </Routes>
          </Router>
        </WindCoatProvider>
      </PreviewDegreeProvider>
    </PartsDegreeProvider>
  );
}

export default App;