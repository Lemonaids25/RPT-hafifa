import React from 'react';
import ReactDOM from 'react-dom';
import { PartsDegreeProvider } from './contexts/PartsDegreeContext.jsx';
import { PreviewDegreeProvider } from './contexts/PreviewDegreeContext.jsx';
import RotationBoxesContainer from './Containers/RotationBoxesContainer.jsx';
import DegreeDisplaysContainer from './Containers/DegreeDisplaysContainer.jsx';
import TankContainer from './Containers/TankContainer.jsx';
import PitchRollContainer from './Containers/PitchRollContainer.jsx';
import './index.css';
import './App.css';

function App() {
  return (
    <PartsDegreeProvider>
      <PreviewDegreeProvider>
        <div className="app-layout">
          <div className="pitch-roll-container">
            <PitchRollContainer />
          </div>
          <div className="main-tank-display-container">
            <DegreeDisplaysContainer />
            <TankContainer />
          </div>
          <div className="input-controls-container">
            <RotationBoxesContainer />
          </div>
        </div>
      </PreviewDegreeProvider>
    </PartsDegreeProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
