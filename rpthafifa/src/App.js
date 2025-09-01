import React from 'react';
import TankComponent from './components/TankComponent';
import RotationBox from './components/RotationBox';
import TankManager from './Managers/TankManager';
import tankHullPng from './assets/tank-hull.png';
import tankTurretPng from './assets/tank-turret.png';

function App() {
  return (
    <div>
      {/* Hull */}
      <TankManager>
        {({ degree, handleSet, handleReset }) => (
          <>
            <RotationBox
              onSet={handleSet}
              onReset={handleReset}
              placeholder="Hull Rotation"
              style={{ position: 'absolute', bottom: 80, left: '30%' }}
            />
            <TankComponent src={tankHullPng} degree={degree} alt="Tank Hull" />
          </>
        )}
      </TankManager>

      {/* Turret */}
      <TankManager>
        {({ degree, handleSet, handleReset }) => (
          <>
            <RotationBox
              onSet={handleSet}
              onReset={handleReset}
              placeholder="Turret Rotation"
              style={{ position: 'absolute', bottom: 80, left: '60%' }}
            />
            <TankComponent src={tankTurretPng} degree={degree} alt="Tank Turret" />
          </>
        )}
      </TankManager>
    </div>
  );
}

export default App;